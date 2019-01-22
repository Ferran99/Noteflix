import {Component, ElementRef, Input, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import { MovieService } from '../movie.service';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import { Movie } from 'src/app/Movies';


@Pipe({ name: 'favoritesMovies' })
export class FavoritesMoviesPipe implements PipeTransform {
  transform(allMovies: Movie[]) {
    return allMovies.filter(movie => movie.favourite);
  }
}


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit {
  @ViewChild('video') video: ElementRef;
  @ViewChild('img') img: ElementRef;
  @ViewChild('icono') icono: ElementRef;
  @ViewChild('Grey') Grey: ElementRef;
  @ViewChild('Red') Red: ElementRef;
  Movie: Movie[];
  @Input() movie: Movie;

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

  goBack(): void {
    this.location.back();
  }
  playVideo(){
    this.img.nativeElement.classList.add('display-none');
    this.icono.nativeElement.classList.remove('card-media-preview');
    this.video.nativeElement.classList.remove('display-none');
  }
  showRed(){
    this.movie.favourite = true;
    this.Grey.nativeElement.classList.add('display-none');
    this.Red.nativeElement.classList.remove('display-none');
    this.addFavourite(this.movie.favourite);
  }
  showGrey(){
    this.movie.favourite = false;
    this.addFavourite(this.movie.favourite);
    this.Grey.nativeElement.classList.remove('display-none');
    this.Red.nativeElement.classList.add('display-none');
  }
  addFavourite(favourite): void {
    favourite = this.movie.favourite;

    this.movieService.updateMovie(this.movie)
      .subscribe(()=> console.log('Added to favourites'));
  }


}
