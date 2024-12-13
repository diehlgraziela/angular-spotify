import { IImages } from './ICommon';
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

interface IUserTopItems {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface IUserTopArtists extends IUserTopItems {
  items: IArtist[];
}

export interface IUserTopTracks extends IUserTopItems {
  items: ITrack[];
}
