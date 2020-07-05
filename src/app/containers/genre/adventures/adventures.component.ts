import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreMovies('adventure')
    .subscribe(res => this.movieService.setMoviesGenre(res))
  }

}
