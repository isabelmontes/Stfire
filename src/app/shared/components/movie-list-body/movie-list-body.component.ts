import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../data/movies.json'
import { MovieModel } from '@core/models/movies.model';

@Component({
  selector: 'app-movie-list-body',
  templateUrl: './movie-list-body.component.html',
  styleUrls: ['./movie-list-body.component.css']
})
export class MovieListBodyComponent implements OnInit {

  movies: MovieModel[] = []

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.movies = data;
  }

}
