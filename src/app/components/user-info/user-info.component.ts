import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  user: SpotifyApi.CurrentUsersProfileResponse = null;

  constructor(private spotifyService: SpotifyService) {
    this.user = spotifyService.user;
  }

  logout() {
    this.spotifyService.logout();
  }
}
