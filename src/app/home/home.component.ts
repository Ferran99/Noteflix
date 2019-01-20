import { Component, ViewChild, ElementRef } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {

    slides = [
    {img: 'https://daw2-ferran-castane.000webhostapp.com/img/BohemianRhapsody.jpeg'},
    {img: 'https://daw2-ferran-castane.000webhostapp.com/img/Aquaman.jpg'},
    {img: 'https://daw2-ferran-castane.000webhostapp.com/img/Superlopez.jpeg'},
    {img: 'https://daw2-ferran-castane.000webhostapp.com/img/Antman2.jpg'}
  ];

  slides_principal = [
    {img: 'https://daw2-ferran-castane.000webhostapp.com/img/ACiegas.jpg'},
    {img: 'https://daw2-ferran-castane.000webhostapp.com/img/MaryPoppinsReturns.jpg'},
    {img: 'https://daw2-ferran-castane.000webhostapp.com/img/LosCrimenesDeGrindelwald.jpg'}

  ];
  slides_principalConfig = {'slides_principalToShow':1, 'slides_principalToScroll':1};
  slideConfig = {'slidesToShow': 2, 'slidesToScroll': 2};

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
}














