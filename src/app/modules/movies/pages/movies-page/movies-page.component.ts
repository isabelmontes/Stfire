import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';
import * as dataRaw from '../../../../data/movies.json'
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
    const observer1$ = this.movieService.dataMoviesTrending$
      .subscribe(response => {
        this.moviesTrending = response
        this.seriesRandom = response
        console.log('Movies trending--->',response)
      })

    const observer2$ = this.movieService.dataSeriesRandom$
      .subscribe(response => {
        this.seriesRandom = [...this.seriesRandom, ...response]
        console.log('Series random akui--->',response)
      })


    this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

}
