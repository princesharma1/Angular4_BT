import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideolistComponent } from './videolist.component';
import {VideolistRoutingModule} from "./videolist-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    VideolistRoutingModule,  
    HttpModule
  ],
  declarations: [VideolistComponent]
})
export class VideolistModule { }  
