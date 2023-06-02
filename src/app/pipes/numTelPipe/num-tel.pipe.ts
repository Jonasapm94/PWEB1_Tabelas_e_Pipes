import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numTel'
})
export class NumTelPipe implements PipeTransform {

  transform(valor: string): string {
    
    if (!valor){
      return valor;
    }
    if (valor.length === 8){
      return `${valor.substring(0,4)}-${valor.substring(4,9)}`
    }
    if (valor.length === 10){
      return `${valor.substring(0,2)} ${valor.substring(2,6)}-${valor.substring(6,11)}`
    }

    if (valor.length === 11){
      return `${valor.substring(0,3)} ${valor.substring(3,7)}-${valor.substring(7,12)}`
    }

    return valor;
  }

}
