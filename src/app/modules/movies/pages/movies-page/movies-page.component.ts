import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';
import { MovieService } from '@modules/movies/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  moviesTrending: Array<MovieModel> = [];
  seriesRandom: Array<MovieModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loadDataAll();
  }

  loadDataAll(): void {
    const movieSub = this.movieService.getAllMovies$().subscribe((response: MovieModel[]) => {
      this.moviesTrending = response;
      console.log('Movies en movie page-componet:', this.moviesTrending);  // Verifica que aquí se están asignando los datos correctamente
  
    });
    const seriesSub = this.movieService.getAllSeries$().subscribe((response: MovieModel[]) => {
      this.seriesRandom = response;
      console.log('Series en movie page-componet:', this.seriesRandom);    // Verifica que aquí se están asignando los datos correctamente
    });

    this.listObservers$.push(movieSub, seriesSub);
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(sub => sub.unsubscribe());
  }
}

