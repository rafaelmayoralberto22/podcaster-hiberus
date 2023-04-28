import { FC } from "react";
import { Episode } from "../../models/PodcastEpisodesListProps";
import { Link } from "react-router-dom";

const PodcastEpisodesListItem: FC<Episode> = ({
  title,
  date,
  duration,
  link,
}) => {
  return (
    <>
      <span className="item">
        <Link to={link}>{title}</Link>
      </span>
      <span className="item">{date}</span>
      <span className="item">{duration}</span>
      <div className="line" />
    </>
  );
};

export default PodcastEpisodesListItem;
