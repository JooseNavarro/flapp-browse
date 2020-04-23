import { Injectable } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AppModel {

  constructor(private movieService: MovieService) { }

  public allMovies(): Observable<any> {
    return this.movieService.popularMovies();
  }
}
