import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';
import {SectionComponent} from './section.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SectionComponent                
            }
        ])
    ],    
    exports: [
        RouterModule
    ]
})
export class SectionRoutingModule {
}