import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MoviePlayerComponent } from './components/movie-player/movie-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { MovieListHeaderComponent } from './components/movie-list-header/movie-list-header.component';
import { MovieListBodyComponent } from './components/movie-list-body/movie-list-body.component';
import { RouterLink, RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';



@NgModule({
  declarations: [
    SideBarComponent,
    MoviePlayerComponent,
    HeaderUserComponent,
    CardMovieComponent,
    SectionGenericComponent,
    MovieListHeaderComponent,
    MovieListBodyComponent,
    OrderListPipe
  ],
  imports: [
    CommonModule, 
    RouterModule
  ], 
  exports:[
    SideBarComponent,
    MoviePlayerComponent,
    HeaderUserComponent, 
    CardMovieComponent, 
    SectionGenericComponent, 
    MovieListHeaderComponent,
    MovieListBodyComponent, 
    OrderListPipe
  ]
})
export class SharedModule { }
