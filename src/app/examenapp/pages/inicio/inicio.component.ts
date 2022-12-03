import { Component } from '@angular/core';
import { ExamenService } from '../../services/examen.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class InicioComponent {

 
  constructor( private paisService: ExamenService ) { }

  

}
