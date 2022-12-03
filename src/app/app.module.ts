import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExamenModule } from './examenapp/examen.module'
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExamenModule,
    SharedModule,
    IvyCarouselModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
