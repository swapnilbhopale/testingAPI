import { LOGIN_URL } from './../environmet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Modal/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token = localStorage.getItem('token') || null;

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser> {
    return this.http.get<IUser>(LOGIN_URL + 'auth/me', {
      headers: this.headers,
    });
  }
  getProductsData() {
    return this.http.get(LOGIN_URL + 'products');
  }
}
