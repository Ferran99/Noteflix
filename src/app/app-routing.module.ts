import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from 'src/app/favourites/favourites.component';

import { MoviesComponent } from 'src/app/movies/movies.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MovieSearchComponent } from 'src/app/movie-search/movie-search.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'favourites', component: FavouritesComponent },
    { path: 'search', component: MovieSearchComponent }

                       /* { path: 'tvseries', component: TVSeriesListComponent},
                        { path: 'movies', component: MoviesListComponent}
*/];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
