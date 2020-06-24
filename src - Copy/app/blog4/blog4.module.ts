import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Blog4RoutingModule } from './blog4-routing.module';
import { Blog4Component } from './blog4.component';


@NgModule({
  declarations: [Blog4Component],
  imports: [
    CommonModule,
    Blog4RoutingModule
  ]
})
export class Blog4Module { }
