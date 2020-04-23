import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  public popularMovies(page = 6): any {
    return this.httpClient.get(`https://api.themoviedb.org/3/movie/popular?&page=${page}`, {
      headers: new HttpHeaders()
        .set('Authorization', 'bearer TOKEN_THE_MOVIE_DB')
    });
  }
}
