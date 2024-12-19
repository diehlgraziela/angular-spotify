import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { MobileHeaderComponent } from '../../components/mobile-header/mobile-header.component';

@Component({
  selector: 'app-player',
  imports: [
    RouterOutlet,
    SidebarComponent,
    RightSidebarComponent,
    MobileHeaderComponent,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  isDesktop = window.innerWidth > 1280;

  constructor(private router: Router) {
    this.router.navigate(['player/home']);
  }
}
