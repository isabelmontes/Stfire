export interface MovieModel {
    _id: string;
    cover: string;
    name: string;
    director: string;
    genre: string;
    year: string;
    duration: string;
    url: string;
    type?: 'movie' | 'serie';  // Campo opcional para identificar si es una película o una serie
  }
  