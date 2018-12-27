import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppComponent } from './FavouritesList.component';
import { AppComponent } from './TVSeriesList.component';
import { AppComponent } from './MoviesList.component';



const appRoutes: Routes = [
                           { path: '', component: AppComponent },
                           { path: 'favourites', component: FavouritesListComponent },
                           { path: 'tvseries', component: TVSeriesListComponent},
                           { path: 'movies', component: MoviesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FavouritesListComponent,
    TVSeriesListComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
