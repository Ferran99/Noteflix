import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
/*import { AppComponent } from './FavouritesList.component';
import { AppComponent } from './TVSeriesList.component';
import { AppComponent } from './MoviesList.component';

*/


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    FavouritesComponent,
    /*FavouritesListComponent,
    TVSeriesListComponent,
    MoviesListComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }