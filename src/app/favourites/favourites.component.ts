import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MovieService } from '../movie.service';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import { Movie } from 'src/app/Movies';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit {
  Movie: Movie[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getMovieFavourite();
  }
  getMovieFavourite(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.Movie = movies.slice(0, 7));
  }



}
