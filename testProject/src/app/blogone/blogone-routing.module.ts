import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogoneComponent } from './blogone.component';

const routes: Routes = [{ path: '', component: BlogoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogoneRoutingModule { }
