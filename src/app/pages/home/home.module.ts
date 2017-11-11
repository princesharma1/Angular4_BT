import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
