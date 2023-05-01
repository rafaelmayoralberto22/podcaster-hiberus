import { FC } from "react";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import { PodcastEpisodesListProps } from "../../types/PodcastEpisodesListProps";
import PodcastEpisodesListTable from "./PodcastEpisodesListTable";

export const PodcastEpisodesList: FC<PodcastEpisodesListProps> = ({
  episodes,
}) => {
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

      <PodcastEpisodesListTable {...{ episodes }} />
    </div>
  );
};

export default PodcastEpisodesList;
