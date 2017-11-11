import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {SectionRoutingModule} from "./search-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule,
    HttpModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
