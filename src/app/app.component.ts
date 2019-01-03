import { Component } from '@angular/core';
import { Movie } from './Movies';
import { MOVIES } from './mock-movies';


declare let jQuery: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
    
  title = 'Noteflix';

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
