import { Component } from '@angular/core';
import { NavOptionComponent } from '../nav-option/nav-option.component';
import { SpotifyService } from '../../services/spotify.service';
import { INavOptions } from '../../interfaces/INavOptions';

@Component({
  selector: 'app-sidebar',
  imports: [NavOptionComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  selectedOption = 'Home';
  playlists: INavOptions[] = [];
  navOptions: INavOptions[] = [
    {
      name: 'Home',
      id: 'home',
      icon: 'home',
      route: '/player',
      active: true,
    },
    {
      name: 'Pesquisar',
      id: 'search',
      icon: 'search',
      route: '/pesquisar',
      active: false,
    },
    {
      name: 'Artistas',
      id: 'artists',
      icon: 'users',
      route: '/artistas',
      active: false,
    },
  ];

  constructor(private spotifyService: SpotifyService) {
    this.getPlaylists();
  }

  async getPlaylists() {
    this.playlists = await this.spotifyService.getUserPlaylists();
  }
}
