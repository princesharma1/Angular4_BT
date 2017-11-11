import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import {SectionRoutingModule} from "./section-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    SectionRoutingModule,
    HttpModule
  ],
  declarations: [SectionComponent]
})
export class SectionModule { }
