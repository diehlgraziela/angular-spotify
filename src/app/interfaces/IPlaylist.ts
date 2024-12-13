import { IExternalUrls, IFollowers, IImages } from './ICommon';

export interface IUserPlaylists {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: ISimplifiedPlaylistItem[];
}

interface ISimplifiedPlaylistItem {
  collaborative: boolean;
  description: string | null;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  images: IImages[];
  name: string;
  owner: IOwner;
  primary_color: null;
  public: false;
  snapshot_id: string;
  tracks: ITracks;
  type: string;
  uri: string;
}

interface IOwner {
  display_name: string | null;
  external_urls: IExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  followers: IFollowers;
}

interface ITracks {
  href: string;
  total: number;
}
