import { Episode } from "./PodcastEpisodesListProps";

export type PodcastEpisodeContextProps = {
  episodes: Episode[];
  setEpisodes: (items: Episode[]) => void;
};
