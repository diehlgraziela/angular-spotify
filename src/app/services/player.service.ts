import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from './spotify.service';
import { ISong, ISongItem } from '../interfaces/ISong';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  // TODO - Replace with signals
  currentSong = new BehaviorSubject<ISongItem>(null);
  timerId: any = null;

  constructor(private spotifyService: SpotifyService) {
    // this.getCurrentSong();
  }

  async getCurrentSong() {
    clearTimeout(this.timerId);

    const song = await this.spotifyService.getCurrentSong();
    this.setCurrentSong(song);

    // this.timerId = setTimeout(() => this.getCurrentSong(), 3000);
  }

  setCurrentSong(song: ISongItem) {
    this.currentSong.next(song);
  }
}
