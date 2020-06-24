import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtiintelRoutingModule } from './artiintel-routing.module';
import { ArtiintelComponent } from './artiintel.component';


@NgModule({
  declarations: [ArtiintelComponent],
  imports: [
    CommonModule,
    ArtiintelRoutingModule
  ]
})
export class ArtiintelModule { }
