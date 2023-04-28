import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Podcast } from "../../types/PodcastType";
import { URL_PODCAST } from "../constants";
import { useQuery } from "./useQuery";

export const usePodcastInfo = () => {
  const { podcastId } = useParams();
  const { data, loading } = useQuery<Podcast>({
    queryKey: "podcasts",
    url: URL_PODCAST,
  });

  const info = useMemo(() => {
    const element = (data?.feed?.entry ?? []).find(
      (item) => item.id.attributes["im:id"] === podcastId
    );

    if (element) {
      return {
        author: element["im:artist"].label,
        description: element.summary.label,
        img: element["im:image"]?.[0]?.label ?? "",
        title: element["im:name"].label,
        link: `/podcast/${podcastId}`,
      };
    }

    return {
      author: "",
      description: "",
      img: "",
      title: "",
      link: "",
    };
  }, [data, podcastId]);

  return { info, loading };
};
