import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { EpisodeInfoProps } from "../../types/PodcastEpisodesListProps";
import { getEpisodes } from "../services/podcast";
import { usePodcastEpisodeContext } from "./usePodcastEpisodeContext";

export const usePodcastInfo = () => {
  const { podcastId } = useParams();
  const { setEpisodes } = usePodcastEpisodeContext();

  const { data } = useQuery<EpisodeInfoProps>({
    queryKey: ["podcasts_details", podcastId],
    queryFn: getEpisodes(podcastId),
  });

  const { title, description, author, img } = data?.info ?? {
    title: "",
    description: "",
    author: "",
    img: "",
  };

  useEffect(() => {
    setEpisodes(data?.episodes ?? []);
  }, [data?.episodes, setEpisodes]);

  return {
    info: {
      author,
      description,
      img,
      title,
      link: `/podcast/${podcastId}`,
    },
  };
};
