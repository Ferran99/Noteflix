import { Component } from '@angular/core';
declare let jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noteflix';

    
    initSlick() {
        jQuery('.slick').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: jQuery('.prev'),
            nextArrow: jQuery('.next'),
            responsive: [
                {
                    'breakpoint': 999,
                    'settings': {
                        'slidesToShow': 3,
                        'slidesToScroll': 3
                    }
                },
                {
                    'breakpoint': 987,
                    'settings': {
                        'slidesToShow': 2,
                        'slidesToScroll': 2
                    }
                },
                {
                    'breakpoint': 768,
                    'settings': {
                        'slidesToShow': 1,
                        'slidesToScroll': 1
                    }
                },              
           ]
        });
    }
}