import { EpisodeResponse } from "../../types/Epidsode";
import { EpisodeInfoProps } from "../../types/PodcastEpisodesListProps";
import { PodcastLateralProps } from "../../types/PodcastLateralProps";
import {
  CORS_PROXY_ALLOWORIGINS,
  URL_PODCAST,
  URL_PODCAST_DETAILS,
} from "../constants";

export const getPodcasts = async () => {
  try {
    const response = await fetch(
      `${CORS_PROXY_ALLOWORIGINS}?${new URLSearchParams({
        url: URL_PODCAST,
      })}`
    );

    const data = await response.json();

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getEpisodes =
  (id?: string) => async (): Promise<EpisodeInfoProps> => {
    try {
      if (id) {
        const response = await fetch(
          `${CORS_PROXY_ALLOWORIGINS}?${new URLSearchParams({
            url: `${URL_PODCAST_DETAILS}${id}`,
          })}`
        );

        const newData = await response.json();
        const episodeInfo = await loadDataEpisode(id, newData);

        return episodeInfo;
      }
    } catch (e) {
      console.log(e);
    }

    return {
      info: {} as PodcastLateralProps,
      episodes: [],
    };
  };

const loadDataEpisode = async (
  podcastId: string,
  inform: EpisodeResponse
): Promise<EpisodeInfoProps> => {
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

      const title = xml.getElementsByTagName("title")?.[0]?.textContent ?? "";
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
          title: it.getElementsByTagName("title")?.[0]?.textContent ?? "",
          date: new Intl.DateTimeFormat("en-GB").format(
            new Date(it.getElementsByTagName("pubDate")?.[0]?.textContent ?? "")
          ),
          duration:
            it.getElementsByTagName("itunes:duration")?.[0]?.textContent ??
            "00:00",
          link: `/podcast/${podcastId}/episode/${encodeURIComponent(
            episodeId
          )}`,
          description:
            it.getElementsByTagName("description")?.[0]?.textContent ?? "",
          url:
            it
              .getElementsByTagName("enclosure")?.[0]
              ?.attributes?.getNamedItem("url")?.value ?? "",
        });
      }
      const info = {
        title,
        description,
        author,
        img,
        link: `/podcast/${podcastId}`,
      };

      if (!episodes.length) {
        console.error("No episodes to show. Error loading rss information");
      }

      return {
        info,
        episodes,
      };
    } catch (e) {
      console.log(e);
    }
  }

  return {
    info: {} as PodcastLateralProps,
    episodes: [],
  };
};
