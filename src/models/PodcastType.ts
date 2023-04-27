export interface Podcast {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry?: EntryEntity[] | null;
  updated: NameOrUriOrAttributesOrIm;
  rights: NameOrUriOrAttributesOrIm;
  title: NameOrUriOrAttributesOrIm;
  icon: NameOrUriOrAttributesOrIm;
  link?: LinkEntity[] | null;
  id: NameOrUriOrAttributesOrIm;
}

export interface Author {
  name: NameOrUriOrAttributesOrIm;
  uri: NameOrUriOrAttributesOrIm;
}

export interface NameOrUriOrAttributesOrIm {
  label: string;
}

export interface EntryEntity {
  "im:name": NameOrUriOrAttributesOrIm;
  "im:image"?: ImageEntity[] | null;
  "im:price": IPrice;
  "im:contentType": IContentType;
  "im:artist": IArtist;
  "im:releaseDate": IReleaseDate;
  summary: NameOrUriOrAttributesOrIm;
  rights?: NameOrUriOrAttributesOrIm | null;
  title: NameOrUriOrAttributesOrIm;
  link: Link;
  id: Id;
  category: Category;
}

export interface ImageEntity {
  label: string;
  attributes: Attributes;
}

export interface Attributes {
  height: string;
}

export interface IPrice {
  label: string;
  attributes: Attributes1;
}

export interface Attributes1 {
  amount: string;
  currency: string;
}

export interface IContentType {
  attributes: Attributes2;
}

export interface Attributes2 {
  term: string;
  label: string;
}

export interface NameOrUriOrAttributesOrIm {
  label: string;
}

export interface Link {
  attributes: Attributes3;
}

export interface Attributes3 {
  rel: string;
  type: string;
  href: string;
}

export interface Id {
  label: string;
  attributes: Attributes4;
}

export interface Attributes4 {
  "im:id": string;
}

export interface IArtist {
  label: string;
  attributes?: Attributes5 | null;
}

export interface Attributes5 {
  href: string;
}

export interface Category {
  attributes: Attributes6;
}

export interface Attributes6 {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
}

export interface IReleaseDate {
  label: string;
  attributes: NameOrUriOrAttributesOrIm;
}

export interface LinkEntity {
  attributes: Attributes7;
}

export interface Attributes7 {
  rel: string;
  type?: string | null;
  href: string;
}
