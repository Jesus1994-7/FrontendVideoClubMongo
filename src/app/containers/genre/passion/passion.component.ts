import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-passion',
  templateUrl: './passion.component.html',
  styleUrls: ['./passion.component.scss']
})
export class PassionComponent implements OnInit {

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreMovies('romance')
    .subscribe(res => this.movieService.setMoviesGenre(res))
  }

}
