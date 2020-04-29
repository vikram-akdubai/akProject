import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinnowComponent } from './joinnow.component';

const routes: Routes = [{ path: '', component: JoinnowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinnowRoutingModule { }
