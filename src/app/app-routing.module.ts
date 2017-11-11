import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
      RouterModule.forRoot([
        {path: '', loadChildren: 'app/pages/home/home.module#HomeModule'},
        { path: 'story/:sef_url.replace(".html","").concat("-"+:id+".html")', loadChildren: 'app/pages/story/story.module#StoryModule'},
        { path: 'section/:id/1/:sectionSefTitle', loadChildren: 'app/pages/section/section.module#SectionModule'},
        { path: 'category/:currentCategorySefTitle.replace(".html","")/1/:id.concat(".html")', loadChildren: 'app/pages/category/category.module#CategoryModule'},
        { path: 'galleries', loadChildren: 'app/pages/gallerylist/gallerylist.module#GallerylistModule'},
        { path: 'gallery/:sef_url.replace(".html","")/1/:id.concat(".html")', loadChildren: 'app/pages/gallery/gallery.module#GalleryModule'},
        { path: 'videos', loadChildren: 'app/pages/videolist/videolist.module#VideolistModule'},
        { path: 'video/:sef_url.replace(".html","")/1/:id.concat(".html")', loadChildren: 'app/pages/video/video.module#VideoModule'},
        { path: 'search', loadChildren: 'app/pages/search/search.module#SearchModule'},
])   
  ],  
  declarations: [],
  exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
          