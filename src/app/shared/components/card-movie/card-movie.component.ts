import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() movie: MovieModel = {
    _id: ' ',
    cover: '',
    name: '',
    director: '',
    genre: '',
    year: '',
    duration: '',
    url: '',
    type: 'movie' // Aquí estamos asegurándonos de incluir el campo `type`
  };

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {
    
  console.log(this.movie);


  }

  sendPlay(movie: MovieModel): void {
    this.multimediaService.callback.emit(movie);
  }
}
