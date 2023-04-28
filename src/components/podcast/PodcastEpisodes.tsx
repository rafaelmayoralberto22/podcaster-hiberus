import { FC } from "react";
import { TwoComponentsLayout } from "../layouts/TwoComponentLayout";
import PodcastEpisodesDetails from "./PodcastEpisodesDetails";
import PodcastEpisodesList from "./PodcastEpisodesList";
import { PodcastEpisodesListProps } from "../../types/PodcastEpisodesListProps";

const PodcastEpisodes: FC<PodcastEpisodesListProps & { count: number }> = ({
  count,
  episodes,
}) => {
  return (
    <TwoComponentsLayout
      type="VERTICAL"
      first={<PodcastEpisodesDetails {...{ count }} />}
      second={<PodcastEpisodesList {...{ episodes }} />}
    />
  );
};

export default PodcastEpisodes;
