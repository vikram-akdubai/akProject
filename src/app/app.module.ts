import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomecontainerComponent } from './homecontainer/homecontainer.component';
import { ArtsliderComponent } from './artslider/artslider.component';
import { CountToModule } from 'angular-count-to';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ReactiveFormsModule } from '@angular/forms';
import { HammerModule } from "@angular/platform-browser";
import { IgxTimePickerModule } from 'igniteui-angular';
import { HttpModule } from '@angular/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomecontainerComponent,
    ArtsliderComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    NgMultiSelectDropDownModule,
    NgxIntlTelInputModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CountToModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HammerModule,
    IgxTimePickerModule,
    HttpModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
