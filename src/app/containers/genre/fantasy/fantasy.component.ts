import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-fantasy',
  templateUrl: './fantasy.component.html',
  styleUrls: ['./fantasy.component.scss']
})
export class FantasyComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreMovies('fantasy')
    .subscribe(res => this.movieService.setMoviesGenre(res))
  }

}
