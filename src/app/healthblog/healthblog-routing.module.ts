import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthblogComponent } from './healthblog.component';

const routes: Routes = [{ path: '', component: HealthblogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthblogRoutingModule { }
