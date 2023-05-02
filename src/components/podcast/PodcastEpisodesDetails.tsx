import { FC } from "react";
import { use18Intl } from "../../helpers/hooks/use18Intl";

const PodcastEpisodesDetails: FC<{ count: number }> = ({ count }) => {
  const { t } = use18Intl();
  return (
    <div className="podcast-episodes-details">{`${t(
      "episodes"
    )}: ${count}`}</div>
  );
};

export default PodcastEpisodesDetails;
