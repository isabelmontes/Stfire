import { Component, Input, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string = ''
  @Input() mode:'small' | 'big' = 'big' 
  @Input() dataMovies: Array<MovieModel> = []

  constructor() { }

  ngOnInit(): void {
  }

}
