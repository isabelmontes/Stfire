import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListHeaderComponent } from './movie-list-header.component';

describe('MovieListHeaderComponent', () => {
  let component: MovieListHeaderComponent;
  let fixture: ComponentFixture<MovieListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
