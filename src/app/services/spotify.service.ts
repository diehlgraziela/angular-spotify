import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: SpotifyApi.CurrentUsersProfileResponse;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async initUser() {
    if (this.user) return true;

    const token = localStorage.getItem('token');

    if (!token) return false;

    try {
      this.setAccessToken(token);
      await this.getSpotifyUser();
      return Boolean(this.user);
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async getSpotifyUser() {
    this.user = await this.spotifyApi.getMe();
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
}
