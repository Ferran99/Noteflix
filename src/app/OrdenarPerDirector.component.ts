import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'aplicacio',
    template: `
      <h2>List of Genres</h2>
      <ul class="list-group" >
      <li class="list-group-item" *ngFor="let movie of movies | ordenarPer:'!n'">
      nom : {{movie.genre}}
      </li>
    `    
})
export class OrdenarPerGenere{
    articles:Array<any>
        movies = [
    { title: '', director: '', genre: ''},

  ];
}