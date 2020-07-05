import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenreMovies('animation')
    .subscribe(res => this.movieService.setMoviesGenre(res))
  }

}
