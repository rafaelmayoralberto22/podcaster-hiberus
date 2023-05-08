import { FC } from "react";
import { PodcastEpisodesListProps } from "../../types/PodcastEpisodesListProps";
import { TwoComponentsLayout } from "../commons/layouts/TwoComponentLayout";
import PodcastEpisodesDetails from "./PodcastEpisodesDetails";
import PodcastEpisodesList from "./PodcastEpisodesList";

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
