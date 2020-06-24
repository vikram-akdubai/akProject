import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorregRoutingModule } from './doctorreg-routing.module';
import { DoctorregComponent } from './doctorreg.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import { NgpSortModule } from 'ngp-sort-pipe';





@NgModule({
  declarations: [DoctorregComponent],
  imports: [
    CommonModule,
    DoctorregRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgpSortModule
  ],
  providers: [
    DatePipe
  ]
})
export class DoctorregModule { }
