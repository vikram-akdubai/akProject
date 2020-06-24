import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrlistingComponent } from './drlisting.component';

const routes: Routes = [{ path: '', component: DrlistingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrlistingRoutingModule { }
