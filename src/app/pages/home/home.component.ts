import { Component } from '@angular/core';
import { TopArtistComponent } from '../../components/top-artist/top-artist.component';
import { LikedSongsComponent } from '../../components/liked-songs/liked-songs.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-home',
  imports: [TopArtistComponent, LikedSongsComponent, RightSidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
