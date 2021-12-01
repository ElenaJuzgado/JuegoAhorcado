import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {

  palabra = 'PATUCO';
  palabraOculta = '';

  intentos = 0;

  gana = false;
  pierde = false;

 letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor(){
   this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar(letra: string){
    this.existeLetra(letra);

    const palabraOcultaArray = this.palabraOculta.split(' '); //.split separa caracteres en arrays con espacios en blanco

    for (let i = 0; i < this.palabra.length; i++){

      if (this.palabra[i] === letra) {
        palabraOcultaArray[i] = letra;
      }

    }

    this.palabraOculta = palabraOcultaArray.join(' '); //.join junta lo separado por el split
    this.verificaGana();

  }

  existeLetra(letra: string){
    if(this.palabra.indexOf(letra) >= 0){  //.indexOf busca la letra en cualquier posición
    //Encontró la letra
    } else {
      //No encontró la letra
      this.intentos ++;
    }
  }

  verificaGana(){
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if(palabraEvaluar === this.palabra){
      this.gana = true;
      console.log('¡Has ganado!');
    }
    if(this.intentos >= 9){
      this.pierde = true;
      console.log('¡Has perdido!')
    }
  }
}
