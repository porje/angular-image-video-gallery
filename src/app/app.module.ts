import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

//3rd party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { SafePipe } from './utility/safe.pipe';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VideolistComponent,
    VideoDetailsComponent,
    SafePipe,
    HomeComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
