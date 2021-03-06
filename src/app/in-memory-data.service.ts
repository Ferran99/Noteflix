import { Injectable } from '@angular/core';
import { Movie } from 'src/app/Movies';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const movies = [

      { id: 1, title: "Aquaman", director: "James Wan", genre: "Science fiction", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/Aquaman.mp4", img: "https://daw2-ferran-castane.000webhostapp.com/img/Aquaman.jpg", synopsis: "Aquaman debe recuperar el legendario Tridente de Atlan para salvar a la ciudad subacuática de Atlantis, y al mundo de la superficie, de su hermano hambriento de poder.", favourite: false },
      { id: 2, title: "Bohemian Rhapsody", director: "Bryan Singer", genre: "Biography", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/BohemianRhapsody.mp4", img: "https://daw2-ferran-castane.000webhostapp.com/img/BohemianRhapsody.jpeg", synopsis: "Freddie Mercury, vocalista del grupo Queen, tiene una vida de excesos y descontrol que pone en peligro la carrera de sus compañeros. Deberán encontrar la forma de permanecer juntos mientras navegan sus años más exitosos.", favourite:false },
      { id: 3, title: "Superlopez", director: "Javier Ruiz Caldera", genre: "Comedy", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/Superlopez.mp4", img: "https://daw2-ferran-castane.000webhostapp.com/img/Superlopez.jpeg", synopsis: "Desde su llegada a la Tierra procedente del planeta Chitón, la vida de Juan López no ha sido fácil. Con superpoderes es difícil no destacar. Poder volar, leer la mente, tener supervisión o detener un convoy del metro para que no descarrile… y regresar luego a la oficina, esforzándose en ser un tipo normal, no ha sido nada sencillo para él. O quizás sí, porque Juan no necesita más que su cruasán matinal para ser feliz… Sin embargo, algo está a punto de cambiar. La aparición en la ordenada vida de López de Luisa, un antiguo amor de instituto, va a causar estragos. Ya no es momento de pasar inadvertido. A pesar de que con ello pueda llamar la atención del malvado Skorba y de su sibilina hija, Ágata, y poner en peligro la supervivencia de su planeta de origen.", favourite:false },
      { id: 4, title: "Los crímenes de Grindelwald", director: "David Yates",  genre: "Fantasy", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/LosCrimenesDeGrindelwald.mp4", img: "https://daw2-ferran-castane.000webhostapp.com/img/LosCrimenesDeGrindelwald.jpg", synopsis: "Grindewald ha logrado escapar y pretende encabezar una revuelta de los magos purasangre para dominar el mundo. Dumbledore, acompañado por su antiguo estudiante Scamander, tratará de evitar que quien fuera su gran amigo cumpla su siniestro propósito.", favourite:false },
      { id: 5, title: "A ciegas", director: "Susanne Bier", genre: "Thriller", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/ACiegas.mp4", img: "https://daw2-ferran-castane.000webhostapp.com/img/ACiegas.jpg", synopsis: "Un lustro después de que una misteriosa presencia sobrenatural llevara al suicidio a una gran parte de la sociedad, una de las supervivientes, Malorie Hayes, y sus dos hijos, buscan desesperadamente el modo de salvarse río abajo, en una pequeña barca, hacia un lugar seguro.", favourite:false },
      { id: 6, title: "El regreso de Mary Poppins", director: "Rob Marshall", genre: "Fantasy", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/MaryPoppinsReturns.mp4", img: "https://daw2-ferran-castane.000webhostapp.com/img/MaryPoppinsReturns.jpg", synopsis: "Mary Poppins regresa a las vidas de Michael, ahora un padre soltero, y su hermana. La niñera llega acompañada de su amigo Jack, un optimista nato, con el propósito de ayudar a Michael, a quien van a desahuciar en cinco días si no paga una deuda.", favourite:false },
      { id: 7, title: "Antman 2", director: "Peyton Reed", genre: "Action", url: "https://daw2-ferran-castane.000webhostapp.com/Pelis/Antman2.mp4", img: "https://daw2-ferran-castane.000webhostapp.com/img/Antman2.jpg", synopsis: "Scott Lang vuelve a enfundarse el traje de Ant-Man para pelear codo con codo junto a la Avispa. La misión revelará a los dos superhéroes un secreto terrible y los enfrentará a su enemigo más poderoso.", favourite:false }
    ];
    return {movies};

  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }



  constructor() { }
}
