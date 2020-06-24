import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenstruationComponent } from './menstruation.component';

const routes: Routes = [{ path: '', component: MenstruationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenstruationRoutingModule { }
