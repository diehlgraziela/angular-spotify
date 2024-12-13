import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { INavOptions } from '../interfaces/INavOptions';
import { IUser } from '../interfaces/IUser';
import { GlobalService } from './global.service';
import { IUserPlaylists } from '../interfaces/IPlaylist';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;

  constructor(
    private userService: UserService,
    private globalService: GlobalService
  ) {
    this.spotifyApi = new Spotify();
  }

  async getTopArtists(limit = 10): Promise<any[]> {
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

  async getLikedSongs(offset = 0, limit: 50): Promise<any> {
    try {
      const songs = await this.spotifyApi.getMySavedTracks({ limit, offset });

      return {
        total: songs.total,
        items:
          songs.items.map((song) => {
            return {
              name: song.track.name,
              uri: song.track.uri,
              duration_ms: song.track.duration_ms,
              id: song.track.id,
              artists: song.track.artists,
              album: song.track.album,
            };
          }) || [],
      };
    } catch (error) {
      console.error(error);
      return null;
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

  async getCurrentSong(): Promise<any> {
    try {
      const song = await this.spotifyApi.getMyCurrentPlayingTrack();

      return {
        name: song.item.name,
        uri: song.item.uri,
        duration_ms: song.item.duration_ms,
        id: song.item.id,
        album: {
          images: song.item.album.images,
          name: song.item.album.name,
          uri: song.item.album.uri,
        },
        artists: song.item.artists,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
