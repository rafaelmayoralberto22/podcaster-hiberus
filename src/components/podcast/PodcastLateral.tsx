import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { use18Intl } from "../../helpers/hooks/use18Intl";
import { PodcastLateralProps } from "../../types/PodcastLateralProps";
import LoadingBox from "../loading/LoadingBox";

const PodcastLateral: FC<PodcastLateralProps> = ({
  img,
  author,
  description,
  title,
  link,
  loading,
}) => {
  const { t } = use18Intl();

  if (loading) {
    return <Skeleton wrapper={LoadingBox} height="50vh" width="250px" />;
  }

  return (
    <div className="podcast-lateral">
      <Link to={link}>
        <img src={img} alt={`${title}, ${author}`} />
      </Link>

      <span className="hr" />

      <Link to={link}>
        <p className="title">
          <strong>{title} </strong>
        </p>
      </Link>

      <Link to={link}>
        <p className="italic-text">{`${t("by")}, ${author}`}</p>
      </Link>

      <span className="hr" />

      <p className="description">
        <strong>{`${t("description")}:`}</strong>
      </p>

      <p className="italic-text">{description}</p>
    </div>
  );
};
export default PodcastLateral;
