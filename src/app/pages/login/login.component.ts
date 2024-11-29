import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private spotifyService: SpotifyService, private router: Router) {
    this.verifyTokenUrlCallback();
  }

  verifyTokenUrlCallback() {
    const token = this.spotifyService.getToken();
    if (token) {
      this.spotifyService.setAccessToken(token);
      this.router.navigate(['/player']);
    }
  }

  login() {
    window.location.href = this.spotifyService.getLoginUrl();
  }
}
