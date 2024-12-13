import { IExternalUrls, IFollowers, IImages } from './ICommon';

export interface IArtist {
  external_urls: IExternalUrls;
  followers: IFollowers;
  genres: string[];
  href: string;
  id: string;
  images: IImages[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ISimplifiedArtist {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
