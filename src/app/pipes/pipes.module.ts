import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { NumTelPipe } from './numTelPipe/num-tel.pipe';



@NgModule({
  declarations: [CpfPipe, NumTelPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    NumTelPipe
  ]
})
export class PipesModule { }
