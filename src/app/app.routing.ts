import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const appRoutes : Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'videos',
        component: VideolistComponent,
    },
    {
        path: 'videos/:slug',
        component: VideoDetailsComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports:[
        RouterModule
    ]
  })
  export class AppRoutingModule { }