import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  peliculas = [
               {
                   "film": "AQUAMAN",
                   "director": "James Wan",
                   "genre": "Science fiction",
                   "url": "https://daw2-ferran-castane.000webhostapp.com/Pelis/Aquaman-OfficialTrailer1.mp4"
               },
               {
                   "film": "BOHEMIAN RHAPSODY",
                   "director": "Bryan Singer",
                   "genre": "Biography, Music, Drama",
                   "url": "https://daw2-ferran-castane.000webhostapp.com/Pelis/BohemianRhapsody-OfficialTrailer[HD]-20thCenturyFOX.mp4"

               },
               {
                   "film": "SUPERLÓPEZ",
                   "director": "Javier Ruiz Caldera",
                   "genre": "Comedy"
               }];

}
