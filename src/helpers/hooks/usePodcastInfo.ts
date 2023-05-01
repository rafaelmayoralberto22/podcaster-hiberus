import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Episode } from "../../types/Epidsode";
import { CORS_PROXY_ALLOWORIGINS, URL_PODCAST_DETAILS } from "../constants";
import PodcastEpisodeContext from "../contexts/PodcastEpisodeContext";
import { useQuery } from "./useQuery";

export const usePodcastInfo = () => {
  const { podcastId } = useParams();
  const { setEpisodes, setLoading } = useContext(PodcastEpisodeContext);
  const [info, setInfo] = useState({
    author: "",
    description: "",
    img: "",
    title: "",
  });
  const { title, description, author, img } = info;

  const loadData = async (inform: any, cache: boolean) => {
    if (!cache) {
      const feed = inform?.results?.[0]?.feedUrl ?? "";
      if (feed) {
        try {
          const response = await fetch(
            `${CORS_PROXY_ALLOWORIGINS}?${new URLSearchParams({
              url: feed,
            })}`
          );
          const dataG = await response.text();
          const parser = new DOMParser();
          const xml = parser.parseFromString(dataG, "text/xml");

          const title =
            xml.getElementsByTagName("title")?.[0]?.textContent ?? "";
          const description =
            xml.getElementsByTagName("description")?.[0]?.textContent ?? "";
          const author =
            xml.getElementsByTagName("itunes:author")?.[0]?.textContent ?? "";
          const img =
            xml
              .getElementsByTagName("itunes:image")?.[0]
              ?.attributes?.getNamedItem("href")?.value ?? "";

          const items = xml.getElementsByTagName("item");
          const episodes = [];

          for (const it of items) {
            const episodeId =
              it.getElementsByTagName("guid")?.[0]?.textContent ?? "";

            episodes.push({
              episodeId,
              title: it.getElementsByTagName("title")?.[0].textContent,
              date: new Intl.DateTimeFormat("en-US").format(
                new Date(
                  it.getElementsByTagName("pubDate")?.[0]?.textContent ?? ""
                )
              ),
              duration:
                it.getElementsByTagName("itunes:duration")?.[0]?.textContent ??
                "00:00",
              link: `/podcast/${podcastId}/episode/${encodeURIComponent(
                episodeId
              )}`,
              description:
                it.getElementsByTagName("description")?.[0]?.textContent ?? "",
              url: it
                .getElementsByTagName("enclosure")?.[0]
                .attributes?.getNamedItem("url")?.value,
            });
          }
          const info = { title, description, author, img };

          if (!episodes.length) {
            console.error("No episodes to show");
          }

          setInfo(info);
          setEpisodes(episodes);

          return {
            info,
            episodes,
          };
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      const { info, episodes } = inform;

      if (!episodes.length) {
        console.error("No episodes to show");
      }

      setInfo(info);
      setEpisodes(episodes);

      return {
        info,
        episodes,
      };
    }
  };

  const { loading } = useQuery<Episode>({
    queryKey: `podcasts_details_${podcastId}`,
    url: `${URL_PODCAST_DETAILS}${podcastId}`,
    callback: loadData,
  });

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  return {
    info: {
      author,
      description,
      img,
      title,
      link: `/podcast/${podcastId}`,
    },
    loading,
  };
};
