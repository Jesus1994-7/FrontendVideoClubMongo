import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(public MoviesService:MovieService) { }

  ngOnInit(): void {
  }

}
