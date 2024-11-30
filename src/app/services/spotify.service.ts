import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment';
import Spotify from 'spotify-web-api-js';
import { INavOptions } from '../interfaces/INavOptions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: SpotifyApi.CurrentUsersProfileResponse;

  constructor(private router: Router) {
    this.spotifyApi = new Spotify();
  }

  getLoginUrl() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;

    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getToken() {
    if (!window.location.hash) return '';

    const params = window.location.hash.split('&');
    return params[0].split('=')[1];
  }

  setAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  async getSpotifyUser() {
    if (this.user) return true;

    const token = localStorage.getItem('token');

    if (!token) return false;

    try {
      this.setAccessToken(token);
      this.user = await this.spotifyApi.getMe();
      return Boolean(this.user);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  async getUserPlaylists(offset = 0, limit = 50): Promise<INavOptions[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, {
      limit,
      offset,
    });

    return playlists.items
      .filter((playlist) => playlist?.id)
      .map((playlist) => {
        return {
          name: playlist.name,
          image: playlist.images[0].url,
          id: playlist.id,
        };
      });
  }

  async getTopArtists(limit = 10): Promise<SpotifyApi.ArtistObjectFull[]> {
    try {
      const topArtists = await this.spotifyApi.getMyTopArtists({
        limit,
      });

      return topArtists.items.map((artist) => artist);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getLikedSongs(
    offset = 0,
    limit: 50
  ): Promise<SpotifyApi.SavedTrackObject[]> {
    try {
      const songs = await this.spotifyApi.getMySavedTracks({ limit, offset });

      return songs.items;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  // TODO - Use Spotify's sdk to play song
  async playSong(songUri: string): Promise<void> {
    try {
      await this.spotifyApi.queue(songUri);
      await this.spotifyApi.skipToNext();
    } catch (error) {
      console.error(error);
    }
  }
}
