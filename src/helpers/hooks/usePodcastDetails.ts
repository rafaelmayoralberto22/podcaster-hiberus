import { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { CORS_PROXY, URL_PODCAST_DETAILS } from "../constants";
import { useQuery } from "./useQuery";

export const usePodcastDetails = () => {
  const { podcastId } = useParams();
  const { data } = useQuery<any>({
    queryKey: `podcasts_details_${podcastId}`,
    url: `${URL_PODCAST_DETAILS}${podcastId}`,
  });

  const getData = async () => {
    const url = data?.results?.[0]?.feedUrl ?? "";
    if (url) {
      try {
        // const response = await fetch(url);
        // const text = await response.text();
        // const xmlDoc = new DOMParser().parseFromString(text, "text/xml");
        // const items = xmlDoc.getElementsByTagName("channel");
        // console.log(items);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useLayoutEffect(() => {
    getData();
  }, [data]);

  return { data };
};
