import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  login_URL = 'https://dummyjson.com/auth/login';
  constructor(private http: HttpClient) {}

  loginUser(data: any) {
    return this.http.post(this.login_URL, data);
  }
}
