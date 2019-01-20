import {Component, OnInit, ViewChild} from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from "src/app/Movies";
import { ElementRef } from '@angular/core';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  @ViewChild('arrayMovies') arrayMovies: ElementRef;


  movies: Movie[] = [];


  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies.slice(1, 5));
  }

  movieHide() {

    this.arrayMovies.nativeElement.classList.add('display-none');


  }

  seeAllMovies(){

    this.arrayMovies.nativeElement.classList.remove('display-none')

  }
}
