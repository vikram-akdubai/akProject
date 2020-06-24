import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkincancerblogComponent } from './skincancerblog.component';

const routes: Routes = [{ path: '', component: SkincancerblogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkincancerblogRoutingModule { }
