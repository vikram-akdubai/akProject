import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoronafactsComponent } from './coronafacts.component';

const routes: Routes = [{ path: '', component: CoronafactsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoronafactsRoutingModule { }
