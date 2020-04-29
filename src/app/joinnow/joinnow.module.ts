import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinnowRoutingModule } from './joinnow-routing.module';
import { JoinnowComponent } from './joinnow.component';


@NgModule({
  declarations: [JoinnowComponent],
  imports: [
    CommonModule,
    JoinnowRoutingModule
  ]
})
export class JoinnowModule { }
