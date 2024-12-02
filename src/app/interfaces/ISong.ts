export interface ISong {
  name: string;
  uri: string;
  duration_ms: number;
  id: string | number;
  album: {
    images: SpotifyApi.ImageObject[];
    name: string;
    uri: string;
  };
  artists: SpotifyApi.ArtistObjectSimplified[];
}
