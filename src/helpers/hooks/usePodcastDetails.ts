import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import PodcastEpisodeContext from "../contexts/PodcastEpisodeContext";

export const usePodcastDetails = () => {
  const { episodeId: id } = useParams();
  const { episodes } = useContext(PodcastEpisodeContext);

  const selectedEpisode = useMemo(
    () =>
      episodes.find(({ episodeId }) => episodeId === id) ?? {
        title: "",
        description: "",
        url: "",
      },
    [episodes, id]
  );

  return { selectedEpisode };
};
