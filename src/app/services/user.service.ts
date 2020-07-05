import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Login } from '../interfaces/login.model';
import { Credentials } from '../interfaces/credentials'
@Injectable({
  providedIn: 'root'
})

export class UserService {
  API_URL: string = environment.API_URL;
  private user : User;

  isProfOut: boolean = false;

  constructor(private httpClient: HttpClient) { }

  //Registro
  register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.API_URL + '/users/register', user);
  }

  //Login
  login(credenciales:Credentials):Observable<Login> {
    return this.httpClient.post<Login>(this.API_URL + '/users/login', credenciales)
  }
  //Logout
  logout() : void {
    this.httpClient.get(this.API_URL + '/users/logout', {
      headers : {
        authorization : localStorage.getItem('authToken')
      }
    })
    .subscribe
    this.setUser(null);
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
  } 

  //SETTER Y GETTER
  setUser(user:User): void {
    this.user = user;
  }
  
  getUser(): User {
    return this.user
  }
}
