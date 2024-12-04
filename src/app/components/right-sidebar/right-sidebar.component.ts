import { Component } from '@angular/core';
import { RecentSearchComponent } from '../recent-search/recent-search.component';
import { TopArtistsComponent } from '../top-artists/top-artists.component';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'app-right-sidebar',
  imports: [RecentSearchComponent, TopArtistsComponent, PlayerCardComponent],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss',
})
export class RightSidebarComponent {}
