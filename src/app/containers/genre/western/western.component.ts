import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-western',
  templateUrl: './western.component.html',
  styleUrls: ['./western.component.scss']
})
export class WesternComponent implements OnInit {

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreMovies('western')
    .subscribe(res => this.movieService.setMoviesGenre(res))
  }

}
