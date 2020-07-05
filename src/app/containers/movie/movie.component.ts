import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  isLogin : boolean = false;
  choosenFilm : any = {};
  choosenFilmGenre : string = "";
  days = 3;
  
  order = {
    userId : "",
    movieId : "",
    deliveryDate : new Date(),
    returnDate : new Date()
  }
  constructor(public orderService:OrderService,
              private movieService:MovieService,
              private userService:UserService,
              ) { }

  ngOnInit(): void {

    this.isLogin = this.userService.isProfOut;
    this.choosenFilm = this.movieService.MoviesChoosen;

    

  }
  
  createOrder(filmId) {
    console.log('entra')

    this.order.movieId = filmId;

    var dataLogin:User = JSON.parse(localStorage.getItem('user'));
    this.order.userId = dataLogin['_id'];

    this.order.deliveryDate = new Date();
    this.order.returnDate = new Date();  
    
    this.orderService.createOrder(this.order)
    .subscribe()
  }

}
