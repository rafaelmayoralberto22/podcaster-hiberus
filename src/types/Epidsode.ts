export interface EpisodeResponse {
  resultCount: number;
  results?: ResultsEntity[] | null;
}

export interface ResultsEntity {
  wrapperType: string;
  kind: string;
  artistId?: number | null;
  collectionId: number;
  trackId: number;
  artistName?: string | null;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string | null;
  trackCensoredName?: string | null;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string | null;
  artworkUrl60: string;
  artworkUrl100?: string | null;
  collectionPrice?: number | null;
  trackPrice?: number | null;
  collectionHdPrice?: number | null;
  releaseDate: string;
  collectionExplicitness?: string | null;
  trackExplicitness?: string | null;
  trackCount?: number | null;
  trackTimeMillis: number;
  country: string;
  currency?: string | null;
  primaryGenreName?: string | null;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds?: string[] | null;
  genres?: (string | GenresEntity)[] | null;
  closedCaptioning?: string | null;
  artistIds?: number[] | null;
  episodeGuid?: string | null;
  description?: string | null;
  episodeContentType?: string | null;
  episodeFileExtension?: string | null;
  episodeUrl?: string | null;
  artworkUrl160?: string | null;
  previewUrl?: string | null;
  shortDescription?: string | null;
}

export interface GenresEntity {
  name: string;
  id: string;
}
