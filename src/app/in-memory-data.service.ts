import { Injectable } from '@angular/core';
import { Movie } from 'src/app/Movies';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const movies = [

      { id: 1, title: "AQUAMAN", director: "James Wan", genre: "Science fiction", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/Aquaman-OfficialTrailer1.mp4" },
      { id: 2, title: "BOHEMIAN RHAPSODY", director: "Bryan Singer", genre: "Biography", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/BohemianRhapsody-OfficialTrailer[HD]-20thCenturyFOX.mp4" },
      { id: 3, title: "SUPERLÓPEZ", director: "Javier Ruiz Caldera", genre: "Comedy", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/SUPERL%C3%93PEZTr%C3%A1ilerEspa%C3%B1ol2(2018)Comedia,Aventura.mp4"},
      { id: 4, title: "Los crímenes de Grindelwald", director: "David Yates",  genre: "Fantasy", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/AnimlesFantasticos-LosCrimenesdeGrindelwald-TrailerOficialComicCon.mp4"},
      { id: 5, title: "A ciegas", director: "Susanne Bier", genre: "Thriller", url: ""},
      { id: 6, title: "El regreso de Mary Poppins", director: "Rob Marshall", genre: "Fantasy", url: ""}
    ];
    return {movies};
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }

  constructor() { }
}
