import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class PlaybackService {
  private readonly SDK_URL = 'https://sdk.scdn.co/spotify-player.js';

  constructor(
    private authService: AuthService,
    private globalService: GlobalService
  ) {}

  appendScript(src: string, async: boolean = true) {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    document.body.appendChild(script);
  }

  initPlayback() {
    this.appendScript(this.SDK_URL);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = this.authService.getToken();
      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: (cb: any) => {
          cb(token);
        },
        volume: 0.5,
      });

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        this.setDeviceId(device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
        this.setDeviceId('');
      });

      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });

      player.addListener(
        'player_state_changed',
        ({ position, duration, track_window: { current_track } }) => {
          console.log('Currently Playing', current_track);
          console.log('Position in Song', position);
          console.log('Duration of Song', duration);
        }
      );

      player.connect();
    };
  }

  setDeviceId(deviceId: string) {
    localStorage.setItem('deviceId', deviceId);
  }

  getDeviceId() {
    return localStorage.getItem('deviceId');
  }

  async playTrack(uri: string) {
    try {
      this.globalService.callApi(
        'put',
        `me/player/play?device_id=${this.getDeviceId()}`,
        {
          uris: [uri],
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
}
