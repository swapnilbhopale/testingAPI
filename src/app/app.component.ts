import { UserService } from './Services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'app';
  loginForm!: FormGroup;
  constructor(private userServ: UserService) {}
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
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
