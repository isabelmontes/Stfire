import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.css']
})
export class MoviePlayerComponent implements OnInit {

  mockCover: MovieModel = {
    _id:'1',
    cover: 'https://images.firstpost.com/wp-content/uploads/2020/06/kelly-ashbury-640.jpg', 
    name: 'Spirit',
    director:'Kelly',
    genre: 'Infantil',
    year:'2001',
    duration:'1:58',
    url: 'htt://localhost/track.mp3', 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
