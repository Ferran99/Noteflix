import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'aplicacio',
    template: `
      <h2>List of Movies</h2>
      <ul class="list-group" >
      <li class="list-group-item" *ngFor="let movie of movies | ordenarPer:'!n'">
      nom : {{movie.title}}
      </li>
    `    
})
export class OrdenarPerPelicula{
    articles:Array<any>
        movies = [
    { title: '', director: '', genre: ''},

  ];
}