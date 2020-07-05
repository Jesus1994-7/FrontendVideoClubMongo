import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(public movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreMovies('action')
    .subscribe(res => this.movieService.setMoviesGenre(res))
  }

}
