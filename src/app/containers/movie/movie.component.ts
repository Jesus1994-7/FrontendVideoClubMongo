import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
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

    //Asignacion a order de MovieId
    this.order.movieId = filmId;

    //Fechas de alquiler y devolucion
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate()+3);

     //Obtenemos el id de usuario almacenado en LocalStorage
    var dataLogin:User = JSON.parse(localStorage.getItem('user'));
    this.order.userId = dataLogin['_id'];

    //Asignacion de fechas
    this.order.deliveryDate = today;
    this.order.returnDate = tomorrow;  
    
    //Lanzamos el pedido
    this.orderService.createOrder(this.order)
    .subscribe(res => {
      alert('Pedido realizado con exito')
    })
  }

}
