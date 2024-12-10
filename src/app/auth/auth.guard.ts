import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn = async (route, segments) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const token = authService.getToken();

  if (!token) {
    notAuthenticated(router);
  }

  //TODO - Validate expired token

  try {
    await authService.getUser();
    const isUserCreated = authService.user;
    return !!isUserCreated ? true : notAuthenticated(router);
  } catch (error) {
    return notAuthenticated(router);
  }
};

const notAuthenticated = (router: Router) => {
  localStorage.clear();
  router.navigate(['/login']);
  return false;
};
