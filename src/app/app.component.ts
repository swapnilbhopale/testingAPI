import { Component, inject } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';
  isAuthenticated = inject(AuthService);
  constructor() {}
  // isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   return !!token;
  // }

  // isAuthenticated(): boolean {
  //   if (typeof window !== 'undefined' && localStorage) {
  //     const token = localStorage.getItem('token');
  //     return !!token;
  //   }
  //   return false;
  // }
}
