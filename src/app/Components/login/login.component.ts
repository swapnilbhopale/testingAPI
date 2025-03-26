import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private userServ: LoginService, private router: Router) {}
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('emilys'),
      password: new FormControl('emilyspass'),
    });
  }

  login() {
    const loginData = this.loginForm.value;
    this.userServ.loginUser(loginData).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.accessToken);
        // this.router.navigateByUrl('profile');
        // this.router.navigate(['profile']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
