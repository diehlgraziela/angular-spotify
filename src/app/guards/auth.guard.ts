import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

export const authGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const spotifyService = inject(SpotifyService);

  const token = localStorage.getItem('token');

  if (!token) {
    notAuthenticated(router);
  }

  return new Promise((resolve) => {
    const isUserCreated = spotifyService.initUser();

    if (isUserCreated) {
      resolve(true);
    } else {
      resolve(notAuthenticated(router));
    }
  });
};

const notAuthenticated = (router: Router) => {
  localStorage.clear();
  router.navigate(['/login']);
  return false;
};
