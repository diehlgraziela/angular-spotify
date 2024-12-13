import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { AuthService } from '../../auth/auth.service';
import { IUser } from '../../interfaces/IUser';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  user: IUser;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.user = userService.user;
  }

  logout() {
    this.authService.logout();
  }
}
