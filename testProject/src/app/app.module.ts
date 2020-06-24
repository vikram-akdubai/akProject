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
import {MatTabsModule} from '@angular/material/tabs';
import { AuthGuard, PermissionGuard, UsersEditGuard, VendorGuard, CustomerGuard, SubscriptionsGuard, UsersGuard, SubscriptionsEditGuard, CompanyGuard } from './_guards';
import { AuthenticationService, HttpService, UtilityService } from './_services';
import { WINDOW_PROVIDERS } from './_providers/window.provider';
import { ToastrModule } from 'ngx-toastr';
import {MatProgressBarModule} from '@angular/material/progress-bar';



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
    HttpModule,
    MatTabsModule,
    MatProgressBarModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      maxOpened: 0,
    }),
  ],
  providers: [
    DatePipe,
    AuthGuard , 
    PermissionGuard, 
    UsersEditGuard , 
    UsersGuard,
    VendorGuard, 
    CustomerGuard, 
    SubscriptionsGuard, 
    SubscriptionsEditGuard,
    AuthenticationService, 
    CompanyGuard,
    HttpService,
    WINDOW_PROVIDERS,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
