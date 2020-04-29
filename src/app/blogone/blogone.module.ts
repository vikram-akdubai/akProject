import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogoneRoutingModule } from './blogone-routing.module';
import { BlogoneComponent } from './blogone.component';


@NgModule({
  declarations: [BlogoneComponent],
  imports: [
    CommonModule,
    BlogoneRoutingModule,
    FormsModule
  ]
})
export class BlogoneModule { }
