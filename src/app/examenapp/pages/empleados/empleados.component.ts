import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../services/examen.service';

export interface empDatos{
  employees:[
  id: number,
  name: string,
  last_name:string,
  birthday: number
]
}


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ]
})
export class EmpleadosComponent implements OnInit {

 
  constructor( private examenService: ExamenService ) {
     
   }

  ngOnInit() {
    this.examenService.getEmp().subscribe(data => console.log(data));
  }

 
}



 


