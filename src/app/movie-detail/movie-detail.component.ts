import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';
import { Movie } from "src/app/Movies";
import {ViewChild} from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  @ViewChild('video') video: ElementRef;
  @ViewChild('img') img: ElementRef;
  @ViewChild('icono') icono: ElementRef;
  @ViewChild('Grey') Grey: ElementRef;
  @ViewChild('Red') Red: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}



  ngOnInit(): void {
    this.getMovie();

  }
  getMovie(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
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
    this.Grey.nativeElement.classList.add('display-none');
    this.Red.nativeElement.classList.remove('display-none');
    this.addFavourite();
}
showGrey(){
    this.Grey.nativeElement.classList.remove('display-none');
    this.Red.nativeElement.classList.add('display-none');
  }
 addFavourite(): void {
    this.movie.favourite = true;
    this.movieService.updateMovie(this.movie)
      .subscribe(()=> console.log('Added to favourites'));
 }
}
