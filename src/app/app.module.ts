import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
/*import { AppComponent } from './FavouritesList.component';
import { AppComponent } from './TVSeriesList.component';
import { AppComponent } from './MoviesList.component';

*/
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    FavouritesComponent,
    MovieSearchComponent,
    /*FavouritesListComponent,
    TVSeriesListComponent,
    MoviesListComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    SlickCarouselModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }


















