import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { RectAreaLightUniformsLib, RectAreaLightHelper, OrbitControls, Stats } from '../../jsm';
// import * as Stats from '../../jsm/stats.module';

@Component({
  selector: 'bb-infite',
  templateUrl: './infite.component.html',
  styleUrls: ['./infite.component.scss']
})
export class InfiteComponent implements OnInit, AfterViewInit {
  public renderer: any;
  public scene: any;
  public camera: any;
  public stats: any;

  constructor() { }
  ngAfterViewInit(): void{
    
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    document.body.appendChild( this.renderer.domElement );
    
    this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
    this.camera.position.set( 0, 14, - 40 );
    
    
    RectAreaLightUniformsLib.init();
    
    this.scene = new THREE.Scene();
    const rectLight1 = new THREE.RectAreaLight( 0xc6c6cf, 5, 4, 10 );
    rectLight1.position.set( - 5, 5, 5 );
    this.scene.add( rectLight1 );

    const rectLight2 = new THREE.RectAreaLight( 0x020cc6, 5, 4, 10 );
    rectLight2.position.set( 0, 5, 5 );
    this.scene.add( rectLight2 );

    const rectLight3 = new THREE.RectAreaLight( 0x0e6dcf, 5, 4, 10 );
    rectLight3.position.set( 5, 5, 5 );
    this.scene.add( rectLight3 );

    this.scene.add( new RectAreaLightHelper( rectLight1 ) );
    this.scene.add( new RectAreaLightHelper( rectLight2 ) );
    this.scene.add( new RectAreaLightHelper( rectLight3 ) );


    const geoFloor = new THREE.BoxGeometry( 2000, 0.1, 2000 );
    const matStdFloor = new THREE.MeshStandardMaterial( { color: 0x808080, roughness: 0.1, metalness: 0 } );
    const mshStdFloor = new THREE.Mesh( geoFloor, matStdFloor );
    this.scene.add( mshStdFloor );

    const geoKnot = new THREE.TorusKnotGeometry( 1.5, 0.5, 200, 16 );
    const matKnot = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0, metalness: 0 } );
    const meshKnot = new THREE.Mesh( geoKnot, matKnot );
    meshKnot.name = 'meshKnot';
    meshKnot.position.set( 0, 5, 0 );
    this.scene.add( meshKnot );

    const controls = new OrbitControls( this.camera, this.renderer.domElement );
    controls.target.copy( meshKnot.position );
    controls.update();

    //

    window.addEventListener( 'resize', this.onWindowResize );

    // this.stats = new Stats();
    // document.body.appendChild( this.stats.dom );

    this.renderer.setAnimationLoop( 
      (time: number)=>{
        const mesh = this.scene.getObjectByName( 'meshKnot' );
        mesh.rotation.y = time / 1000;

        this.renderer.render( this.scene, this.camera );

        // this.stats.update();
      }
   );

  }

  ngOnInit(): void {
  }

  private onWindowResize() {

    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.camera.aspect = ( window.innerWidth / window.innerHeight );
    this.camera.updateProjectionMatrix();

  }

  public animation( time: number ) {
    console.log('SCENe animation', this.scene )

    const mesh = this.scene.getObjectByName( 'meshKnot' );
    mesh.rotation.y = time / 1000;

    this.renderer.render( this.scene, this.camera );

    this.stats.update();

  }


}
