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
    {img: 'https://daw2-ferran-castane.000webhostapp.com/Imatges/bohemian.jpeg'},
    {img: 'https://daw2-ferran-castane.000webhostapp.com/Imatges/aquaman.jpg'},
    {img: 'https://daw2-ferran-castane.000webhostapp.com/Imatges/superlopez.jpeg'},
    {img: 'https://daw2-ferran-castane.000webhostapp.com/Imatges/atman.jpg'}
  ];
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














