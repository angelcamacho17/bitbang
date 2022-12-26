import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AbstractContainerComponent } from './components/abstract-container/abstract-container.component';
import { PunkBackgroundComponent } from './components/punk-background/punk-background.component';
import { CubeComponent } from './components/cube/cube.component';
import { InfiteComponent } from './components/infite/infite.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AbstractContainerComponent,
    PunkBackgroundComponent,
    CubeComponent,
    InfiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
