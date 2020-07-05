import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit {

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreMovies('horror')
    .subscribe(res => this.movieService.setMoviesGenre(res))
  }

}
