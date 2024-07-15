import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/movies.json'
import { MovieModel } from '@core/models/movies.model';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  mockMoviesList: Array<MovieModel> = [

  ]

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.mockMoviesList = data;

  }

}
