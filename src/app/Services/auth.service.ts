import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token?: string | null = null;
  constructor() {}

  isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
      return !!this.token;
    }
    return false;
  }
}
