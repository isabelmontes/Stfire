import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MoviePlayerComponent } from './components/movie-player/movie-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MoviePlayerComponent,
    HeaderUserComponent,
    CardMovieComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    SideBarComponent,
    MoviePlayerComponent,
    HeaderUserComponent, 
    CardMovieComponent, 
    SectionGenericComponent
  ]
})
export class SharedModule { }
