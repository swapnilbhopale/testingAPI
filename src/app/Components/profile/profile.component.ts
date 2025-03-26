import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { IUser } from '../../Modal/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileData!: IUser;
  constructor(private userServ: UserService) {}

  ngOnInit(): void {
    this.userProfileData();
  }
  userProfileData() {
    this.userServ.getUser().subscribe((res: any) => {
      this.profileData = res;
      // console.log(res);
    });
  }
  ngOnDestroy(): void {}
}
