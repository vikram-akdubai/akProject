import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenstruationRoutingModule } from './menstruation-routing.module';
import { MenstruationComponent } from './menstruation.component';


@NgModule({
  declarations: [MenstruationComponent],
  imports: [
    CommonModule,
    MenstruationRoutingModule
  ]
})
export class MenstruationModule { }
