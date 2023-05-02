import { Episode } from "./PodcastEpisodesListProps";

export type PodcastEpisodeContextProps = {
  episodes: Episode[];
  loading: boolean;
  setEpisodes: (items: Episode[]) => void;
  setLoading: (loading: boolean) => void;
};
