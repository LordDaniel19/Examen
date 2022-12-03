import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GruposComponent } from './pages/grupos/grupos.component';


import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    InicioComponent,
    GruposComponent,
    EmpleadosComponent,
   
  ],
  exports: [
    InicioComponent,
    EmpleadosComponent,
    GruposComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IvyCarouselModule
  ]
})
export class ExamenModule { }
