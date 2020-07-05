import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  page = 1;
  showModal: boolean;
  currentMovie: Movie;
  pelisMostrar:Movie[];

  constructor(private moviesService : MovieService ) { }

  //AL INICIAR SE INICIAN TODAS LAS PAGINAS 
  ngOnInit(): void {
    this.getByPage();
  }

    //ORDENADAR POR PAGINA
    getByPage(): void {
      this.moviesService.getByPage(this.page)
        .subscribe(movies => {
          this.pelisMostrar = movies;
        });
    }
    
    //PASAR A LA SIGUIENTE PAGINA
    nextPage(): void {
      this.page++;
      this.getByPage();
    }
    backPage():void {
      if(this.page > 1){
      this.page--;
      this.getByPage();
      }
    }
    //MOSTRAR DETALLES DE LAS PELICULAS
    showMovieModalDetail(movie: Movie): void {
      this.showModal = true;
      this.currentMovie = movie;
    }
    //CERRAR DETALLES DE LAS PELICULAS
    closeMovieModalDetail(): void {
      this.showModal = false;
    }

  }



