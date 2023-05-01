import { FC, useId } from "react";
import {
  Episode,
  PodcastEpisodesListProps,
} from "../../types/PodcastEpisodesListProps";
import PodcastEpisodesListTableItem from "./PodcastEpisodesListTableItem";

const PodcastEpisodesListTable: FC<PodcastEpisodesListProps> = ({
  episodes,
}) => {
  const id = useId();

  return (
    <>
      {episodes.map((item: Episode) => (
        <PodcastEpisodesListTableItem
          key={`${id}-${item.title}-${item.date}-${item.duration}`}
          {...item}
        />
      ))}
    </>
  );
};

export default PodcastEpisodesListTable;
