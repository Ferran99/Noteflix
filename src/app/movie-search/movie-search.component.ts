import { MovieService } from '../movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';

import { Movie } from 'src/app/Movies';
import { Observable, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { take, takeUntil } from 'rxjs/operators';


@Component({
    selector: 'app-movie-search',
    templateUrl: './movie-search.component.html',
    styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit, OnDestroy {

    @ViewChild('arrayMovies') arrayMovies: ElementRef;
    @ViewChild('arrayMoviesSearch') arrayMoviesSearch: ElementRef;



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
                this.filterMovies();
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

    private filterMovies() {
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

    movieShow() {

        this.arrayMoviesSearch.nativeElement.classList.remove('display-none');
        this.arrayMovies.nativeElement.classList.add('display-none');


    }
    movieShowAll() {
        this.arrayMoviesSearch.nativeElement.classList.add('display-none');
        this.arrayMovies.nativeElement.classList.remove('display-none');


    }



}
