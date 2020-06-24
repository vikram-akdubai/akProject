import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoronafactsRoutingModule } from './coronafacts-routing.module';
import { CoronafactsComponent } from './coronafacts.component';


@NgModule({
  declarations: [CoronafactsComponent],
  imports: [
    CommonModule,
    CoronafactsRoutingModule,
    FormsModule
  ]
})
export class CoronafactsModule { }
