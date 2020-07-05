import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MovieService } from 'src/app/services/movie.service';
import { User } from 'src/app/models/user.model';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  
  constructor(private userService:UserService,
              private movieService:MovieService) { }

  ngOnInit(): void {
  }
  //buscar por titulo
  searchMovie(searchValue : string): void{
      this.movieService.searchMoviesTitle(searchValue)
      .subscribe(res=>this.movieService.setMovies(res));
    
  }

  getMovie(): Movie[] {
    return this.movieService.getMovies();
  }
  //para hacer el userService private
  getUser(): User{
    return this.userService.getUser();
  }
  //Desconectar cuenta
  logout():void {
    this.userService.logout();

  }
}
