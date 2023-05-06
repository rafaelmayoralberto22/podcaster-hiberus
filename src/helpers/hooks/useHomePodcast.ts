import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { EntryEntity, Podcast } from "../../types/PodcastType";
import { SEARCH_KEY_STORE } from "../constants";
import GlobalStoreContext from "../contexts/GlobalStoreContext";
import { applyFilters, orderByPodcast } from "../global";
import { getPodcasts } from "../services/podcast";

export const useHomePodcast = () => {
  const [original, setOriginal] = useState<EntryEntity[]>([]);
  const [podcasts, setPotcast] = useState<EntryEntity[]>([]);
  const { setLoading } = useContext(GlobalStoreContext);

  const onSuccess = (data: Podcast) => {
    const feed = orderByPodcast(data?.feed?.entry ?? []);
    const key = sessionStorage.getItem(SEARCH_KEY_STORE);
    setOriginal(feed);
    key ? setPotcast(applyFilters(key, feed)) : setPotcast(feed);
  };

  const { data, isLoading } = useQuery<Podcast>({
    queryKey: ["podcasts"],
    queryFn: getPodcasts,
  });

  useEffect(() => {
    data && onSuccess(data);
  }, [data]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  const onSearch = (search: string) => {
    if (!search) {
      setPotcast(original);
      return;
    }

    setPotcast(applyFilters(search, original));
  };

  return { podcasts, onSearch };
};
