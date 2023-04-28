import { FC } from "react";
import { EpisodesDescriptionProps } from "../../models/EpisodesDescriptionProps";

const EpisodesDescription: FC<EpisodesDescriptionProps> = ({
  title,
  description,
  url,
}) => {
  return (
    <div className="episode-descriptions">
      <h1>{title}</h1>
      <pre>{description}</pre>
    </div>
  );
};

export default EpisodesDescription;
