import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private URL_API = "http://localhost:5000/acme/api/auth/signup";

  constructor(private http: HttpClient) { }

  signin(email, password){

  }

  signup(user: User){
    return this.http.post(this.URL_API, user);
  }
  
}
