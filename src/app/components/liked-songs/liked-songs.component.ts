import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { MsToMinutesPipe } from '../../pipes/ms-to-minutes.pipe';

@Component({
  selector: 'app-liked-songs',
  imports: [MsToMinutesPipe],
  templateUrl: './liked-songs.component.html',
  styleUrl: './liked-songs.component.scss',
})
export class LikedSongsComponent {
  likedSongs: SpotifyApi.SavedTrackObject[];
  hover: number;

  constructor(private spotifyService: SpotifyService) {
    this.getLikedSongs();
  }

  async getLikedSongs() {
    this.likedSongs = await this.spotifyService.getLikedSongs(0, 50);
  }

  getArtistsNames(artists: SpotifyApi.ArtistObjectSimplified[]) {
    return artists.map((artist) => artist.name).join(', ');
  }

  async playSong(songUri: string) {
    await this.spotifyService.playSong(songUri);
  }
}
