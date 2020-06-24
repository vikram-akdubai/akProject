import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CovidguidelineRoutingModule } from './covidguideline-routing.module';
import { CovidguidelineComponent } from './covidguideline.component';


@NgModule({
  declarations: [CovidguidelineComponent],
  imports: [
    CommonModule,
    CovidguidelineRoutingModule,
    FormsModule
  ]
})
export class CovidguidelineModule { }
