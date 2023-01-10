import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],

})
export class PadreComponent implements OnInit{
  title = 'Registro de Personas';

  model = {name: '', dni: '', estado_civil: ''}
  datos = '';
 
  ngOnInit(): void {
  }

  onSubmit(values: any): void {
    this.datos = values;
    console.log('Form values', values);
  }
}
