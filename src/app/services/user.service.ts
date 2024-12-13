import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { IUser, IUserTopArtists, IUserTopTracks } from '../interfaces/IUser';
import { IUserPlaylists } from '../interfaces/IPlaylist';
import { IArtist } from '../interfaces/IArtist';
import { ITrack } from '../interfaces/ITrack';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser;

  constructor(private globalService: GlobalService) {}

  async getCurrentUser() {
    try {
      this.user = await this.globalService.callApi<IUser>('get', 'me');
    } catch (error) {
      console.error(error);
    }
  }

  async getCurrentUserPlaylists(
    offset = 0,
    limit = 20
  ): Promise<IUserPlaylists> {
    try {
      const playlists = await this.globalService.callApi<IUserPlaylists>(
        'get',
        `users/${this.user.id}/playlists?limit=${limit}&offset=${offset}`
      );

      return playlists;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getCurrentUserTopTracks(
    limit = 10,
    offset = 0
  ): Promise<IUserTopTracks> {
    try {
      const topTracks = await this.globalService.callApi<IUserTopTracks>(
        'get',
        `me/top/tracks?limit=${limit}&offset=${offset}`
      );

      return topTracks;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getCurrentUserTopArtists(
    limit = 10,
    offset = 0
  ): Promise<IUserTopArtists> {
    try {
      const topArtists = await this.globalService.callApi<IUserTopArtists>(
        'get',
        `me/top/artists?limit=${limit}&offset=${offset}`
      );

      return topArtists;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
