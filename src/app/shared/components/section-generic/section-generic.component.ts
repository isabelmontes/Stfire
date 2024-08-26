import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MovieModel } from '@core/models/movies.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() mode: 'small' | 'big' = 'big';
  @Input() dataMovies: Array<MovieModel> = [];

  constructor() { }

  ngOnInit(): void {
   
    console.log('ngOnInit - DataMovies:', this.dataMovies);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataMovies && this.dataMovies) {
      console.log('ngOnChanges - DataMovies:', this.dataMovies);
     
    }
  }
}

