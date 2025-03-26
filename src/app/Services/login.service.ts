import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_URL } from '../environmet';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(data: any) {
    return this.http.post(LOGIN_URL + 'auth/login', data);
  }
}
