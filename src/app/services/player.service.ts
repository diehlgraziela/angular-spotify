import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from './spotify.service';
import { ISong } from '../interfaces/ISong';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  // TODO - Replace with signals
  currentSong = new BehaviorSubject<ISong>(null);
  timerId: any = null;

  constructor(private spotifyService: SpotifyService) {
    this.getCurrentSong();
  }

  async getCurrentSong() {
    clearTimeout(this.timerId);

    const song = await this.spotifyService.getCurrentSong();
    this.setCurrentSong(song);

    this.timerId = setTimeout(() => this.getCurrentSong(), 3000);
  }

  setCurrentSong(song: ISong) {
    this.currentSong.next(song);
  }
}
