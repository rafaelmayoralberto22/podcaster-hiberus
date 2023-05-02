import { Episode } from "./Epidsode";
import { EpisodeInfoProps } from "./PodcastEpisodesListProps";

export type PodcastLateralProps = {
  img: string;
  title: string;
  author: string;
  description: string;
  link: string;
  loading?: boolean;
};

export type PodcastInfoProps = Episode | EpisodeInfoProps;
