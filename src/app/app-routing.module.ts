import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './examenapp/pages/inicio/inicio.component';
import { GruposComponent } from './examenapp/pages/grupos/grupos.component';
import { EmpleadosComponent } from './examenapp/pages/empleados/empleados.component';


const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'grupos',
        component: GruposComponent
    },
    {
        path: 'empleados',
        component: EmpleadosComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


