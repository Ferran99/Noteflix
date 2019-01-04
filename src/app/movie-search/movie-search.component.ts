import { MovieService } from '../movie.service';
import { BrowserModule } from '@angular/platform-browser';

import { Movie } from "src/app/Movies";
import { Observable, Subject } from "rxjs";
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { MatSelect, VERSION } from '@angular/material';
import { take, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit, OnDestroy {
    
    movies: Movie[];
    /*movies$: Observable<Movie[]>;
    private searchTerms = new Subject<string>();*/
    
    /** control for the selected movie */
    public movieCtrl: FormControl = new FormControl();
    
    /** control for the MatSelect filter keyword */
    public movieFilterCtrl: FormControl = new FormControl();

    /** control for the selected movie for multi-selection */
    public movieMultiCtrl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword multi-selection */
    public movieMultiFilterCtrl: FormControl = new FormControl();
    
    /** list of banks */
    /*private movies: Movie[] = [

     { title: "AQUAMAN",director: "James Wan", genre: "Science fiction", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/Aquaman-OfficialTrailer1.mp4" },
     { title: "BOHEMIAN RHAPSODY",director: "Bryan Singer", genre: "Biography", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/BohemianRhapsody-OfficialTrailer[HD]-20thCenturyFOX.mp4" },
     { title: "SUPERLÓPEZ",director: "Javier Ruiz Caldera", genre: "Comedy", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/SUPERL%C3%93PEZTr%C3%A1ilerEspa%C3%B1ol2(2018)Comedia,Aventura.mp4"},
    { title: "Los crímenes de Grindelwald", director: "David Yates",  genre: "Fantasy", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/AnimlesFantasticos-LosCrimenesdeGrindelwald-TrailerOficialComicCon.mp4"},

    ];*/

    /** list of Movies filtered by search keyword */
    public filteredMovies: ReplaySubject<Movie[]> = new ReplaySubject<Movie[]>(1);

    @ViewChild('singleSelect') singleSelect: MatSelect;

    /** Subject that emits when the component has been destroyed. */
    private _onDestroy = new Subject<void>();
    
    constructor(private movieService: MovieService) { }

    /*search(term: string): void {
        this.searchTerms.next(term);
      }*/   
  ngOnInit() {
      this.getMovies();
      
   // load the initial movie list
      this.filteredMovies.next(this.movies.slice());

      // listen for search field value changes
      this.movieFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterBanks();
        });
     
  }
  ngOnDestroy() {
      this._onDestroy.next();
      this._onDestroy.complete();
    }

  getMovies(): void {
      this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
    }
  
  private filterBanks() {
      if (!this.movies) {
        return;
      }
      // get the search keyword
      let search = this.movieFilterCtrl.value;
      if (!search) {
        this.filteredMovies.next(this.movies.slice());
        return;
      } else {
        search = search.toLowerCase();
      }
      // filter the movies
      this.filteredMovies.next(
        this.movies.filter(movie => movie.title.toLowerCase().indexOf(search) > -1)
      );
    }

}
