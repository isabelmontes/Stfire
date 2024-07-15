import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() movie: MovieModel = {   _id: ' ',cover:'',
    name:'',
    director: '',
    genre: '',
    year: '',
    duration:'',
    url: '',};

  constructor() { }

  ngOnInit(): void {
  }

}
