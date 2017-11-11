import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import {CategoryRoutingModule} from "./category-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
    HttpModule
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
