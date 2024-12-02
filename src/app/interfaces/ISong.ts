export interface ISongItem {
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

export interface ISong {
  total: number;
  items: ISongItem[];
}
