import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  usersData: any[] = [];

  filteredUsers: any[] = [];
  searchQuery: string = '';
  ngOnInit(): void {
    this.tableData();
  }
  constructor(private userServ: UserService, private http: HttpClient) {}
  tableData() {
    this.http.get('https://dummyjson.com/users').subscribe((res: any) => {
      console.log(res, 'user-------------');
      this.usersData = res.users;
      this.filteredUsers = this.usersData;
    });
  }

  filterUsers() {
    // this.filteredUsers = this.usersData.filter((user) =>
    //   `${user.firstName} ${user.lastName}`
    //     .toLowerCase()
    //     .includes(this.searchQuery.toLowerCase())
    // );
  }
}
