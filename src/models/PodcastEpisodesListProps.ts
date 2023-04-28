export type Episode = {
  title: string;
  date: string;
  duration: string;
  link: string;
};

export type PodcastEpisodesListProps = {
  episodes: Episode[];
};
