import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username;
  email;
  orderId;
  isDoneOrder: boolean = false
  choosenFilm: any = {};
  constructor(private movieService:MovieService,
              private orderService: OrderService,
              private userService:UserService) { }

  ngOnInit(): void {
    var dataLogin:User = JSON.parse(localStorage.getItem('user'))

    this.username = dataLogin['name']
    this.email = dataLogin['email']
    this.isDoneOrder = this.orderService.isOrder
    this.choosenFilm = this.movieService.MoviesChoosen
    
  }
  

}
