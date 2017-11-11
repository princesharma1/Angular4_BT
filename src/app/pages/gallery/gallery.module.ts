import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {GalleryRoutingModule} from "./gallery-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    HttpModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }  
