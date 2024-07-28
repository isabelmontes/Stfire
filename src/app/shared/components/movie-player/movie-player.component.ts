import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.css']
})
export class MoviePlayerComponent implements OnInit, OnDestroy{

  mockCover: MovieModel = {
    _id:'1',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Spirit_Stallion_of_the_Cimarron_poster.jpg', 
    name: 'Spirit',
    director:'Kelly',
    genre: 'Infantil',
    year:'2001',
    duration:'1:58',
    url: 'htt://localhost/track.mp3', 
  }

  listObservers$: Array<Subscription>=[]
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observe1$:Subscription = this.multimediaService.callback.subscribe(
      (response: MovieModel) => {
        console.log('Recibiendo pelicula', response)
      }
    )
  this.listObservers$= [observe1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log("Se murio")
  }

}
