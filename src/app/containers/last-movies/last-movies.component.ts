import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-last-movies',
  templateUrl: './last-movies.component.html',
  styleUrls: ['./last-movies.component.scss']
})
export class LastMoviesComponent implements OnInit {

  pelisMostrar:Movie[];
  constructor(public MoviesService:MovieService) { }

  ngOnInit(){
    this.MoviesService.getLastFilms()
    .subscribe(
      res => this.pelisMostrar = res,
      error => console.log(error),
      () => console.log(this.pelisMostrar)
    )
  }
}