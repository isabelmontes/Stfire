import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { MovieModel } from '@core/models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  // Método para obtener todas las películas
  getAllMovies$(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(`${this.URL}/Movies`)
      .pipe(
        tap(data => console.log('Movies Data:', data)),
        catchError(err => {
          console.error('Error fetching movies', err);
          return of([]);
        })
      );
  }

  // Método para obtener todas las series
  getAllSeries$(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(`${this.URL}/Series`)
      .pipe(
        tap(data => console.log('Series Data:', data)),
        catchError(err => {
          console.error('Error fetching series', err);
          return of([]);
        })
      );
  }
}
