import { FC } from "react";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import { PodcastLateralProps } from "../../models/PodcastLateralProps";

const PodcastLateral: FC<PodcastLateralProps> = ({
  img,
  author,
  description,
  title,
}) => {
  const { t } = use18Intl();
  return (
    <div className="podcast-lateral">
      <img src={img} alt={`${title}, ${author}`} />

      <span className="hr" />

      <p className="title">
        <strong>{title} </strong>
      </p>

      <p className="italic-text">{`${t("by")}, ${author}`}</p>

      <span className="hr" />

      <p className="description">
        <strong>{`${t("description")}:`}</strong>
      </p>

      <p className="italic-text">{description}</p>
    </div>
  );
};
export default PodcastLateral;
