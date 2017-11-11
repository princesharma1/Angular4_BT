import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerylistComponent } from './gallerylist.component';
import {GallerylistRoutingModule} from "./gallerylist-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    GallerylistRoutingModule,
    HttpModule
  ],
  declarations: [GallerylistComponent]
})
export class GallerylistModule { }  
