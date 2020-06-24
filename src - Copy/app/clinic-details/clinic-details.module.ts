import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClinicDetailsRoutingModule } from './clinic-details-routing.module';
import { ClinicDetailsComponent } from './clinic-details.component';
import { HammerModule } from "@angular/platform-browser";
import { IgxTimePickerModule } from 'igniteui-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


@NgModule({
  declarations: [ClinicDetailsComponent],
  imports: [
    CommonModule,
    ClinicDetailsRoutingModule,
    FormsModule,
    HammerModule,
    IgxTimePickerModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    AngularMultiSelectModule,
  ]
})
export class ClinicDetailsModule { }
