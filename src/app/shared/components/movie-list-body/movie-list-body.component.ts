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
  optionSort: { property:string | null, order:string}={ property: null, order: 'asc'}


  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.movies = data;
  }

  changeSort(property: string): void{
      const{ order } = this.optionSort
      this.optionSort = {
        property,
        order: order === 'asc' ? 'desc' : 'asc'
      }
      console.log(this.optionSort);
  }
}
