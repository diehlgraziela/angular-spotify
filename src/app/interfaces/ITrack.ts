import { ISimplifiedArtist } from './IArtist';
import { IExternalIds, IExternalUrls } from './ICommon';

export interface ITrack {
  album: any;
  artists: ISimplifiedArtist[];
  available_markets?: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: IExternalIds;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from?: any;
  restrictions?: IRestrictions;
  name: string;
  popularity: number;
  preview_url?: string | null;
  track_number: number;
  type: 'track';
  uri: string;
  is_local: boolean;
}

interface IRestrictions {
  reason: 'market' | 'product' | 'explicit';
}
