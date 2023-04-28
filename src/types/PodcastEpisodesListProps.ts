export type Episode = {
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
