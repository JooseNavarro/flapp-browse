import { Component, Input } from '@angular/core';
import { RoutesAdapter } from 'web-adapter-js';

@Component({
  selector: 'flapp-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  @Input() movie: any;

  public navigation(): void {
    const { id } = this.movie;
    const route = new RoutesAdapter();
    route.emit('/app/watch/', { id });
  }

}
