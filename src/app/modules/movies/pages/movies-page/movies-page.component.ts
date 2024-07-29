import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';
import { MovieService } from '@modules/movies/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  moviesTrending: Array<MovieModel> = []
  seriesRandom: Array<MovieModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
// this.movieService.getAllMovies$()
    // .subscribe((response: MovieModel[])=> {
    //   this.moviesTrending = response
    // })
  }

  async loadDataAll(): Promise<any> {
    this.moviesTrending = await this. movieService.getAllMovies$().toPromise(), 
    this.seriesRandom = await this.movieService.getAllRandom$().toPromise()
  }

  loadDataRandom():void{
     this.movieService.getAllRandom$()
     .subscribe((response: MovieModel[])=> {
      this.seriesRandom = response
     })
  }

  ngOnDestroy(): void {

  }

}
