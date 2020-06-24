import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorregComponent } from './doctorreg.component';

const routes: Routes = [{ path: '', component: DoctorregComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorregRoutingModule { }
