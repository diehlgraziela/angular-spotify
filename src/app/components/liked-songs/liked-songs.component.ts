import { Component, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { MsToMinutesPipe } from '../../pipes/ms-to-minutes.pipe';
import { PlayerService } from '../../services/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liked-songs',
  imports: [MsToMinutesPipe],
  templateUrl: './liked-songs.component.html',
  styleUrl: './liked-songs.component.scss',
})
export class LikedSongsComponent implements OnDestroy {
  likedSongs: any;
  currentSong: any;
  subscriptions: Subscription[] = [];
  hover: number;

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {
    // this.getLikedSongs();
    // this.getCurrentSong();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  async getLikedSongs() {
    this.likedSongs = await this.spotifyService.getLikedSongs(0, 50);
  }

  getArtistsNames(artists: SpotifyApi.ArtistObjectSimplified[]) {
    return artists.map((artist) => artist.name).join(', ');
  }

  async playSong(song: any) {
    await this.spotifyService.playSong(song.uri);
    this.playerService.setCurrentSong(song);
  }

  getCurrentSong() {
    const subscription = this.playerService.currentSong.subscribe(
      (song) => (this.currentSong = song)
    );

    this.subscriptions.push(subscription);
  }
}
