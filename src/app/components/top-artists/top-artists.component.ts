import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { NavOptionComponent } from '../nav-option/nav-option.component';

@Component({
  selector: 'app-top-artists',
  imports: [NavOptionComponent],
  templateUrl: './top-artists.component.html',
  styleUrl: './top-artists.component.scss',
})
export class TopArtistsComponent {
  topArtists: SpotifyApi.ArtistObjectFull[];

  constructor(private spotifyService: SpotifyService) {
    this.getTopArtists();
  }

  async getTopArtists() {
    const artists = await this.spotifyService.getTopArtists(5);
    this.topArtists = artists;
  }
}
