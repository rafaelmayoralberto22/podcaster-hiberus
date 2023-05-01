import { FC } from "react";
import { Link } from "react-router-dom";
import { Episode } from "../../types/PodcastEpisodesListProps";

const PodcastEpisodesListTableItem: FC<Episode> = ({
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

export default PodcastEpisodesListTableItem;
