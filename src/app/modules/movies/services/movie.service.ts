import { Injectable } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';
import { observable, Observable, of} from 'rxjs'
import * as dataRaw from '../../../data/movies.json'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  dataMoviesTrending$: Observable<MovieModel[]> = of([])
  dataSeriesRandom$: Observable<any> = of([])

  constructor() {
    const{ data}: any = (dataRaw as any).default;
    
    this.dataMoviesTrending$ = of(data)

    this.dataSeriesRandom$ = new Observable((observer)=>{
      
      const movieExample: MovieModel ={
        _id: '4',
        cover:'https://alternativemovieposters.com/wp-content/uploads/2023/10/Jason-Ragosta_TalkToMe.jpg',
        name: 'Hablame',
        director: 'dos youtiber',
        genre: 'terror',
        year:'2023',
        duration:'2hrs',
        url:'https://alternativemovieposters.com/wp-content/uploads/2023/10/Jason-Ragosta_TalkToMe.jpg'
      }
      setTimeout(()=>{
        observer.next([movieExample])
      }, 3500)
      // observer.next([movieExample])
    })
   }
}
