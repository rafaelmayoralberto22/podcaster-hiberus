import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import PodcastEpisodeContext from "../contexts/PodcastEpisodeContext";
import { getEpisodes } from "../services/podcast";
import { EpisodeInfoProps } from "../../types/PodcastEpisodesListProps";
import GlobalStoreContext from "../contexts/GlobalStoreContext";

export const usePodcastInfo = () => {
  const { podcastId } = useParams();
  const { setEpisodes } = useContext(PodcastEpisodeContext);
  const { setLoading } = useContext(GlobalStoreContext);

  const { data, isLoading } = useQuery<EpisodeInfoProps>({
    queryKey: [`podcasts_details_${podcastId}`],
    queryFn: getEpisodes(podcastId),
  });

  const { title, description, author, img } = data?.info ?? {
    title: "",
    description: "",
    author: "",
    img: "",
  };

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

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
