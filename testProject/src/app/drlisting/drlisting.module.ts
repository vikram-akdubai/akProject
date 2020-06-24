import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrlistingRoutingModule } from './drlisting-routing.module';
import { DrlistingComponent } from './drlisting.component';


@NgModule({
  declarations: [DrlistingComponent],
  imports: [
    CommonModule,
    DrlistingRoutingModule
  ]
})
export class DrlistingModule { }
