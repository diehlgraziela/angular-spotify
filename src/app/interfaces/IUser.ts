import { IImages, IPage } from './ICommon';
import { IArtist } from './IArtist';
import { ITrack } from './ITrack';

export interface IUser {
  display_name: string;
  external_urls: IExternalUrls;
  followers: IFollowers;
  href: string;
  id: string;
  images: IImages[];
  type: 'user';
  uri: string;
}

interface IFollowers {
  href: string | null;
  total: number;
}

interface IExternalUrls {
  spotify: string;
}

export interface IUserTopArtists extends IPage {
  items: IArtist[];
}

export interface IUserTopTracks extends IPage {
  items: ITrack[];
}

export interface IUserSavedTracks extends IPage {
  items: { added_at: string; track: ITrack }[];
}
