import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoronaliveComponent } from './coronalive.component';

const routes: Routes = [{ path: '', component: CoronaliveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoronaliveRoutingModule { }
