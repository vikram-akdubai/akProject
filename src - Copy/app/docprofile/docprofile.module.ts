import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocprofileRoutingModule } from './docprofile-routing.module';
import { DocprofileComponent } from './docprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { HammerModule } from "@angular/platform-browser";
import { IgxTimePickerModule } from 'igniteui-angular';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';




@NgModule({
  declarations: [DocprofileComponent],
  imports: [
    CommonModule,
    DocprofileRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    AngularMultiSelectModule,
    HammerModule,
    IgxTimePickerModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class DocprofileModule { }
