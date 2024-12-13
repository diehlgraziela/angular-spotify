export interface IImages {
  height: number;
  width: number;
  url: string;
}

export interface IExternalUrls {
  spotify: string;
}

export interface IExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

export interface IFollowers {
  href: string | null;
  total: number;
}

export interface IPage {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}
