import { IImages } from './ICommon';

export interface IUser {
  display_name: string;
  external_urls: IExternalUrls;
  followers: IFollowers;
  href: string;
  id: string;
  images: IImages[];
  type: string;
  uri: string;
}

interface IFollowers {
  href: string | null;
  total: number;
}

interface IExternalUrls {
  spotify: string;
}
