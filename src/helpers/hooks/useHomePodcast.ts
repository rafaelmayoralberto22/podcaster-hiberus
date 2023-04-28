import { useEffect, useState } from "react";
import { EntryEntity, Podcast } from "../../types/PodcastType";
import { URL_PODCAST } from "../constants";
import { applyFilters, orderByPodcast } from "../global";
import { useQuery } from "./useQuery";

export const useHomePodcast = () => {
  const [original, setOriginal] = useState<EntryEntity[]>([]);
  const [podcasts, setPotcast] = useState<EntryEntity[]>([]);
  const { data, loading } = useQuery<Podcast>({
    queryKey: "podcasts",
    url: URL_PODCAST,
  });

  useEffect(() => {
    const feed = orderByPodcast(data?.feed?.entry ?? []);
    setOriginal(feed);
    setPotcast(feed);
  }, [data]);

  const onSearch = (search: string) => {
    if (!search) {
      setPotcast(original);
      return;
    }

    setPotcast(applyFilters(search, original));
  };

  return { podcasts, loading, onSearch };
};
