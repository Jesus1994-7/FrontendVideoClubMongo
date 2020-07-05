import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.scss']
})
export class ThrillerComponent implements OnInit {

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreMovies('thriller')
    .subscribe(res => this.movieService.setMoviesGenre(res))
  }

}
