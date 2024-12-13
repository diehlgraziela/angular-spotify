import { Component } from '@angular/core';
import { NavOptionComponent } from '../nav-option/nav-option.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { INavOptions } from '../../interfaces/INavOptions';
import { IUserPlaylists } from '../../interfaces/IPlaylist';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  imports: [NavOptionComponent, UserInfoComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  selectedOption = 'home';
  playlists: IUserPlaylists;
  navOptions: INavOptions[] = [
    {
      name: 'Home',
      id: 'home',
      icon: 'home',
      route: '/player/home',
      active: true,
    },
    {
      name: 'Pesquisar',
      id: 'search',
      icon: 'search',
      route: '/player/pesquisar',
      active: false,
    },
    {
      name: 'Artistas',
      id: 'artists',
      icon: 'users',
      route: '/player/artistas',
      active: false,
    },
  ];

  constructor(private userService: UserService) {
    this.getPlaylists();
  }

  async getPlaylists() {
    this.playlists = await this.userService.getCurrentUserPlaylists();
  }
}
