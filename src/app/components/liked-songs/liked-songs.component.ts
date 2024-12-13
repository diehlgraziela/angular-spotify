import { Component } from '@angular/core';
import { MsToMinutesPipe } from '../../pipes/ms-to-minutes.pipe';
import { UserService } from '../../services/user.service';
import type { IUserSavedTracks } from '../../interfaces/IUser';
import type { ITrack } from '../../interfaces/ITrack';
import type { ISimplifiedArtist } from '../../interfaces/IArtist';

@Component({
  selector: 'app-liked-songs',
  imports: [MsToMinutesPipe],
  templateUrl: './liked-songs.component.html',
  styleUrl: './liked-songs.component.scss',
})
export class LikedSongsComponent {
  savedTracks: IUserSavedTracks;
  currentTrack: ITrack;
  hover: number;

  constructor(private userService: UserService) {
    this.getSavedTracks();
  }

  async getSavedTracks() {
    this.savedTracks = await this.userService.getCurentUserSavedTracks(50, 0);
  }

  playTrack(track: ITrack) {
    this.currentTrack = track;
  }

  getArtistsNames(artists: ISimplifiedArtist[]) {
    return artists.map((artist) => artist.name).join(', ');
  }
}
