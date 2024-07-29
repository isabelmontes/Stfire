import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MoviesPageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule, 
    SharedModule
  ]
})
export class MoviesModule { }
