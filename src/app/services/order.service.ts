import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Order } from '../models/order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  //RUTA DE CONEXION AL BACKEND
  API_URL = environment.API_URL; //http://localhost:3000

  private order : Order;

  constructor(private httpClient: HttpClient) { }

    createOrder(order: Order) : Observable<Order> {
      return this.httpClient.post<Order>(this.API_URL + '/orders', order)
    }
}
