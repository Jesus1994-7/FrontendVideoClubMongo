import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model'



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //RUTA DE CONEXION AL BACKEND
  API_URL = environment.API_URL; //http://localhost:3000

  movies: Movie[] = [];
  genre: string;
  MoviesChoosen: object[];
  moviesGenre: object[];

  constructor(private httpClient : HttpClient) { }
  
  getByPage(page : number) : Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.API_URL + '/movies/page/' + page);
  }
  //Busqueda por titulo
  searchMoviesTitle(search: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.API_URL + '/movies/search/' + search);
  }

  //Peliculas populares
  getPopularMovies():Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.API_URL + '/movies/mostpopular')
  }

  //Ultimas peliculas
  getLastFilms():Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.API_URL + '/movies/lastmovies')
  }
  //Peliculas por género
  getGenreMovies(genre:string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/movies/genre/' + genre);
  }


  //SETTER - GETTER
  setMovies(movies:Movie[]): void {
    this.movies = movies;
  }
  getMovies (): Movie[] {
    return this.movies;
  }

  //SETTER - GETTER DE GENEROS

  setMoviesGenre(moviesGenre:object[]):void {
    this.moviesGenre = moviesGenre
  }

  getMoviesGenre():object {
    return this.moviesGenre
  }
  
  //Detalles de peliculas
  locateMovies(MoviesChoose:any): object {
    this.MoviesChoosen = MoviesChoose;
    return;
  }
}
