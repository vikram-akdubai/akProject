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
    IgxTimePickerModule
  ]
})
export class DocprofileModule { }
