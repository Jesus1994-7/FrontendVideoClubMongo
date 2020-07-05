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
  
  order: Order = {
    userId : "",
    movieId : "",
    deliveryDate : new Date(),
    returnDate : new Date()
  }
  constructor(private movieService:MovieService,
              private userService:UserService,
              private orderService:OrderService) { }

  ngOnInit(): void {

    this.isLogin = this.userService.isProfOut;
    this.choosenFilm = this.movieService.MoviesChoosen;
    console.log(this.choosenFilm)
  }
  
  createOrder(order: Order):void {
    console.log('entra')
    var userData:User = JSON.parse(localStorage.getItem('user'));
    
    this.order.userId = userData._id;
    this.order.movieId = this.choosenFilm._id;
    this.order.deliveryDate = new Date();
    this.order.returnDate = new Date();  
    
    this.orderService.createOrder(order)
    .subscribe(res => this.order = res,
      error => console.log(error))
  }

}
