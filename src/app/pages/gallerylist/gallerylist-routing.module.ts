import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {GallerylistComponent} from './gallerylist.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GallerylistComponent               
            }
        ])
    ],    
    exports: [
        RouterModule
    ]
})
export class GallerylistRoutingModule {
}