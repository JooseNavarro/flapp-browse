import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

import { FlappComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    FlappComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ MovieService ],
  entryComponents: [ FlappComponent ]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const customElement = createCustomElement(FlappComponent, { injector: this.injector });
    customElements.define('net-browse', customElement);
  }
}
