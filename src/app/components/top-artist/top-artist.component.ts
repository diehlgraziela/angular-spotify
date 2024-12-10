import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-top-artist',
  imports: [],
  templateUrl: './top-artist.component.html',
  styleUrl: './top-artist.component.scss',
})
export class TopArtistComponent {
  topArtist: SpotifyApi.ArtistObjectFull;

  constructor(private spotifyService: SpotifyService) {
    // this.getTopArtist();
  }

  async getTopArtist() {
    const artists = await this.spotifyService.getTopArtists(1);
    this.topArtist = artists.pop();
  }
}
