import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocprofileComponent } from './docprofile.component';

const routes: Routes = [{ path: '', component: DocprofileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocprofileRoutingModule { }
