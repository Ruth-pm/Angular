import { Component } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent {
  title : string = "CALCULADORA EN ANGULAR";
  inputTitle : string = "Ingrese primer valor";
  inputTitle2 : string = "Ingrese segundo valor"
  valor1 : number = 0;
  valor2 : number = 0;
  calcular : string = 'elegir';
  resultado : number = 0;

  sumar(){
    this.resultado = this.valor1 + this.valor2;
  }
  restar(){
    this.resultado = this.valor1 - this.valor2;
  }
  multiplicar(){
    this.resultado = this.valor1 * this.valor2;
  }
  dividir(){
    this.resultado = this.valor1 / this.valor2;
  }


  result(): number{
    if(this.calcular === 'suma'){
      this.sumar();
      return this.resultado;
    }else if (this.calcular === 'resta'){
      this.restar();
      return this.resultado;
    }else if (this.calcular === 'multiplicacion'){
      this.multiplicar();
      return this.resultado;
    }else if (this.calcular === 'division'){
      this.dividir();
      return this.resultado;
    }else{
      return 0;
    }
  }
}
