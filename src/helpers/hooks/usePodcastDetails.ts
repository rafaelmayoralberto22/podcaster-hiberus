import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { usePodcastEpisodeContext } from "./usePodcastEpisodeContext";

export const usePodcastDetails = () => {
  const { episodeId: id } = useParams();
  const { episodes } = usePodcastEpisodeContext();

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
