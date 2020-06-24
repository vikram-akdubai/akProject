import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogthreeRoutingModule } from './blogthree-routing.module';
import { BlogthreeComponent } from './blogthree.component';


@NgModule({
  declarations: [BlogthreeComponent],
  imports: [
    CommonModule,
    BlogthreeRoutingModule,
    FormsModule

  ]
})
export class BlogthreeModule { }
