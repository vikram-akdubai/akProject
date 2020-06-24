import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtiintelComponent } from './artiintel.component';

const routes: Routes = [{ path: '', component: ArtiintelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtiintelRoutingModule { }
