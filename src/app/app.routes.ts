import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'player',
    loadComponent: () =>
      import('./pages/player/player.component').then((m) => m.PlayerComponent),
    canMatch: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      // { path: 'pesquisar' },
      // { path: 'artistas' },
    ],
  },
];
