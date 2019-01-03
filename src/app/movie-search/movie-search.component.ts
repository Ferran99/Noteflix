import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from "src/app/Movies";

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
    
    movies: Movie[];


    constructor(private movieService: MovieService) { }

  ngOnInit() {
      this.getMovies();
  }
  
  getMovies(): void {
      this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
    }

}
