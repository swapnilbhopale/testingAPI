import { ProductComponent } from './Components/product/product.component';
import { Routes } from '@angular/router';
import { ProfileComponent } from './Components/profile/profile.component';
import { LoginComponent } from './Components/login/login.component';
import { UserComponent } from './Components/user/user.component';
import path from 'path';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'product', component: ProductComponent },
];
