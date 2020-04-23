import { Component, OnInit } from '@angular/core';
import { AppModel } from './models/app.model';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class FlappComponent implements OnInit {

  public movies: Array<any> = [];

  constructor(private appModel: AppModel) { }

  ngOnInit(): void {
    const movies = this.appModel.allMovies();
    movies.subscribe( ({ results }) => this.movies = results);
  }
}
