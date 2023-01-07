import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  texto: string = '';
  tipo : string = '';
  valor : string = '';

  fecha : string = 'fecha';
  hora : string = 'hora';
  tiempo : string = 'tiempo transcurrido';
}
