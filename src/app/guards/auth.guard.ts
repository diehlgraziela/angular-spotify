import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

export const authGuard: CanMatchFn = async (route, segments) => {
  const router = inject(Router);
  const spotifyService = inject(SpotifyService);

  const token = localStorage.getItem('token');

  if (!token) {
    notAuthenticated(router);
  }

  //TODO - Validate expired token

  try {
    const isUserCreated = await spotifyService.getSpotifyUser();
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
