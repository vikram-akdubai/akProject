import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Blog4Component } from './blog4.component';

const routes: Routes = [{ path: '', component: Blog4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Blog4RoutingModule { }
