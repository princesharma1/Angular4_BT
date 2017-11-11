import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryComponent } from './story.component';
import {StoryRoutingModule} from "./story-routing.module";
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    StoryRoutingModule,
    HttpModule
  ],
  declarations: [StoryComponent]
})
export class StoryModule { }
