import { Component } from '@angular/core';
import { ExamenService } from '../../services/examen.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  
  `
  ]
})
export class GruposComponent {

 
  
  constructor( private paisService: ExamenService ) { }

}
