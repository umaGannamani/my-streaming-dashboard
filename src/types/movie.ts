// types/movie.ts

export interface Movie {
  imdbID: string;       // unique ID
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;        // movie, series, etc.
}

export interface MovieDetail extends Movie {
  Plot?: string;
  Genre?: string;
  Director?: string;
  Actors?: string;
  Language?: string;
  Rated?: string;
  Runtime?: string;
  imdbRating?: string;
}
