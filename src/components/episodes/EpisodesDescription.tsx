import { FC } from "react";
import { EpisodesDescriptionProps } from "../../types/EpisodesDescriptionProps";

const EpisodesDescription: FC<EpisodesDescriptionProps> = ({
  title,
  description,
  url,
}) => {
  return (
    <div className="episode-descriptions">
      <h1>{title}</h1>

      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <audio controls src={url} title="audio-podcast">
        <source src={url} type="audio/mp3" />
        <p>
          Your browser doesn't support this audio file. Here is a
          <a href="url">link to the audio</a> instead.
        </p>
      </audio>
    </div>
  );
};

export default EpisodesDescription;
