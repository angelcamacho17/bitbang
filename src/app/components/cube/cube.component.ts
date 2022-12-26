import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'bb-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void  { 
    // look up the canvas
    const canvas: HTMLElement = document.getElementById("c") as HTMLElement ;
    // create a WebGLRenderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setClearColor( 0x000000, 0 ); // the default
  
    //field of view - 75deg vertical
    const fov = 75;
  
    // default a canvas is 300x150 pixels
    // which makes the aspect 300/150 or 2.
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    // create a PerspectiveCamera
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  
    // camera defaults to looking down the -Z axis with +Y up
    // so we need to move the camera back a little from
    // the origin in order to see anything
    camera.position.z = 2;
  
    const scene = new THREE.Scene();
  
    // create a light source
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
    
    scene.background = null

    // create a BoxGeometry
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  
    // create a basic material and set its color
    // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 });
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
  
    // create a Mesh
    const cube = new THREE.Mesh(geometry, material);
  
    scene.add(cube);
    const render = (time: number) => {
      time *= 0.001; //in seconds
  
      if (this.resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        // changing the camera aspect to remove the strechy problem
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
  
      cube.rotation.x = this.mouseY * 0.005;
      cube.rotation.y = this.mouseX * 0.005;
      // render the scene
      renderer.render(scene, camera);
      // loop
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }
  ngOnInit(): void {
    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  resizeRendererToDisplaySize = (renderer: { domElement: any; setSize: (arg0: any, arg1: any, arg2: boolean) => void; }) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    // resize only when necessary
    if (needResize) {
      //3rd parameter `false` to change the internal canvas size
      renderer.setSize(width, height, false);
    }
    return needResize;
  };
  
  // mouse
  public mouseX = 0;
  public mouseY = 0;

}
