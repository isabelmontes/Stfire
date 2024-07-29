import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, mergeMap, tap} from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { MovieModel } from '@core/models/movies.model';
// import { MovieModel } from '@core/models/movies.model';
// import { observable, Observable, of} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) {

  }

  private skipById(listMovies: MovieModel[], id: string): Promise<MovieModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listMovies.filter(a => a._id !== id)
      resolve(listTmp)
    })

  }

  getAllMovies$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks `)
      .pipe(
        map(({ data }: any) => {
          return data
        })
      )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks `)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, '1')),

        tap(data => console.log('TodoOK', data)),
        catchError((err) => {
          console.log('Algo paso revisame', [status]);
          return of([])
        })
      )
  }
}
