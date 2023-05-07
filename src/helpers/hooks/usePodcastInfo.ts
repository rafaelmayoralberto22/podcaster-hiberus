import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { EpisodeInfoProps } from "../../types/PodcastEpisodesListProps";
import { getEpisodes } from "../services/podcast";
import { useGlobalStoreContext } from "./useGlobalStoreContext";
import { usePodcastEpisodeContext } from "./usePodcastEpisodeContext";

export const usePodcastInfo = () => {
  const { podcastId } = useParams();
  const { setLoading } = useGlobalStoreContext();
  const { setEpisodes } = usePodcastEpisodeContext();

  const { data, isLoading, isFetching } = useQuery<EpisodeInfoProps>({
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
    setLoading(isLoading || isFetching);
  }, [isLoading, isFetching, setLoading]);

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
