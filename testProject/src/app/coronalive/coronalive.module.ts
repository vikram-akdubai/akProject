import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoronaliveRoutingModule } from './coronalive-routing.module';
import { CoronaliveComponent } from './coronalive.component';


@NgModule({
  declarations: [CoronaliveComponent],
  imports: [
    CommonModule,
    CoronaliveRoutingModule
  ]
})
export class CoronaliveModule { }
