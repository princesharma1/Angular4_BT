import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {VideolistComponent} from './videolist.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: VideolistComponent               
            }
        ])
    ],    
    exports: [
        RouterModule
    ]
})
export class VideolistRoutingModule {
}