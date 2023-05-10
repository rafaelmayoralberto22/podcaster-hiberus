import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { HomeData } from "../../types/HomeListProps";
import { SEARCH_KEY_STORE } from "../constants";
import { applyFilters, orderByPodcast } from "../global";
import { getPodcasts } from "../services/podcast";

export const useHomePodcast = () => {
  const [podcasts, setPotcast] = useState<HomeData[]>([]);

  const onSuccess = (data: HomeData[]) => {
    const feed = orderByPodcast(data);
    const key = sessionStorage.getItem(SEARCH_KEY_STORE);
    key ? setPotcast(applyFilters(key, feed)) : setPotcast(feed);
  };

  const { data } = useQuery({
    queryKey: ["podcasts"],
    queryFn: getPodcasts,
  });

  const onSearch = (search: string) => {
    if (data) {
      if (!search) {
        setPotcast(data);
        return;
      }

      setPotcast(applyFilters(search, data));
    }
  };

  useEffect(() => {
    data && onSuccess(data);
  }, [data]);

  return { podcasts, onSearch };
};
