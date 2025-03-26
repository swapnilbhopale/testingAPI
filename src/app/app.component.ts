import { Component } from '@angular/core';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';

  // isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   return !!token;
  // }

  isAuthenticated(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      const token = localStorage.getItem('token');
      return !!token;
    }
    return false;
  }
}
