import { FC, useId } from "react";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import {
  Episode,
  PodcastEpisodesListProps,
} from "../../types/PodcastEpisodesListProps";
import PodcastEpisodesListItem from "./PodcastEpisodesListItem";

export const PodcastEpisodesList: FC<PodcastEpisodesListProps> = ({
  episodes,
}) => {
  const id = useId();
  const { t } = use18Intl();

  return (
    <div className="podcast-episodes-list">
      <span className="item">
        <strong>{t("title")}</strong>
      </span>
      <span className="item">
        <strong>{t("date")}</strong>
      </span>
      <span className="item">
        <strong>{t("duration")}</strong>
      </span>
      <div className="line line__header" />
      {episodes.map((item: Episode) => (
        <PodcastEpisodesListItem
          key={`${id}-${item.title}-${item.date}-${item.duration}`}
          {...item}
        />
      ))}
    </div>
  );
};

export default PodcastEpisodesList;
