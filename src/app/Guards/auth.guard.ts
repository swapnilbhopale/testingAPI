import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authSrev = inject(AuthService);
  const router = inject(Router);
  if (authSrev.isAuthenticated()) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
