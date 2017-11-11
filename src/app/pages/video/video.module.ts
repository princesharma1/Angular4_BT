import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import {VideoRoutingModule} from "./video-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,  
    HttpModule
  ],
  declarations: [VideoComponent]
})
export class VideoModule { }  
