import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogthreeComponent } from './blogthree.component';

const routes: Routes = [{ path: '', component: BlogthreeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogthreeRoutingModule { }
