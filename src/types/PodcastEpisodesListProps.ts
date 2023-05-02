import { PodcastLateralProps } from "./PodcastLateralProps";

export type Episode = {
  episodeId: string;
  title: string;
  date: string;
  duration: string;
  link: string;
  description: string;
  url: string;
};

export type PodcastEpisodesListProps = {
  episodes: Episode[];
};

export type EpisodeInfoProps = {
  info: PodcastLateralProps;
} & PodcastEpisodesListProps;
