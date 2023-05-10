import { FC } from "react";
import {
  Episode,
  PodcastEpisodesListProps,
} from "../../types/PodcastEpisodesListProps";
import PodcastEpisodesListTableItem from "./PodcastEpisodesListTableItem";

const PodcastEpisodesListTable: FC<PodcastEpisodesListProps> = ({
  episodes,
}) => {
  return (
    <>
      {episodes.map((item: Episode) => (
        <PodcastEpisodesListTableItem
          key={`${item.title}-${item.date}-${item.duration}`}
          {...item}
        />
      ))}
    </>
  );
};

export default PodcastEpisodesListTable;
