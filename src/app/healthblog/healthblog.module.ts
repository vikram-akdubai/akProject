import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthblogRoutingModule } from './healthblog-routing.module';
import { HealthblogComponent } from './healthblog.component';


@NgModule({
  declarations: [HealthblogComponent],
  imports: [
    CommonModule,
    HealthblogRoutingModule
  ]
})
export class HealthblogModule { }
