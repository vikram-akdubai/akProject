import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkincancerblogRoutingModule } from './skincancerblog-routing.module';
import { SkincancerblogComponent } from './skincancerblog.component';


@NgModule({
  declarations: [SkincancerblogComponent],
  imports: [
    CommonModule,
    SkincancerblogRoutingModule
  ]
})
export class SkincancerblogModule { }
