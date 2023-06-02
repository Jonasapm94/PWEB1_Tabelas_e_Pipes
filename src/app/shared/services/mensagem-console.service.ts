import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService extends IMensagem {

  constructor() { 
    super()
  }
  
  info(mensagem: string): void {
    console.log(`INFO - ${mensagem}`);
  }
  
  sucesso(mensagem: string): void {
    console.log(`SUCESSO - ${mensagem}`)
  }
  
  erro(mensagem: string): void {
    console.log(`ERRO - ${mensagem}`)
  }

  alerta(mensagem: string): void {
    alert(`ALERTA - ${mensagem}`)
  }
}
