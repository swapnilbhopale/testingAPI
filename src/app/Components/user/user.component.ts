import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../Modal/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  usersData: IUser[] = [];
  filteredUsers: any[] = [];
  searchQuery: string = '';
  ngOnInit(): void {
    this.tableData();
  }
  constructor(private userServ: UserService, private http: HttpClient) {}

  tableData() {
    this.http.get('https://dummyjson.com/users').subscribe((res: any) => {
      // this.usersData = [res.users[0]];
      this.usersData = res.users.slice(0, 10);

      // console.log(this.usersData[0].firstName, 'user-------------');
      // this.usersData = res.filter((res: any) => res.users.id == 1);

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
