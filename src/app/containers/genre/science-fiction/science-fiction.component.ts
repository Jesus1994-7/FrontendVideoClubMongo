import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-science-fiction',
  templateUrl: './science-fiction.component.html',
  styleUrls: ['./science-fiction.component.scss']
})
export class ScienceFictionComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    
    this.movieService.getGenreMovies('science fiction')
    .subscribe(res => this.movieService.setMoviesGenre(res))
    
  }
}
