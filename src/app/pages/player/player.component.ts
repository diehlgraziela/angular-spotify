import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-player',
  imports: [RouterOutlet, SidebarComponent, RightSidebarComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  // TODO - Improve usage of routes, instead of accessing "player/home", access "home"
  constructor(private router: Router, private spotifyService: SpotifyService) {
    router.navigate(['player/home']);
  }
}
