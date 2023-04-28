import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Episode } from "../../types/Epidsode";
import { URL_PODCAST_DETAILS } from "../constants";
import { msToTime } from "../global";
import { useQuery } from "./useQuery";

export const usePodcastDetails = () => {
  const { podcastId, episodeId } = useParams();
  const { data, loading } = useQuery<Episode>({
    queryKey: `podcasts_details_${podcastId}`,
    url: `${URL_PODCAST_DETAILS}${podcastId}&media=podcast&entity=podcastEpisode&limit=200`,
  });

  const episodes = useMemo(
    () =>
      data?.results
        ?.filter(
          ({ episodeGuid, description, episodeUrl }) =>
            !!episodeGuid && !!description && !!episodeUrl
        )
        ?.map(
          ({
            trackName,
            releaseDate,
            trackTimeMillis,
            episodeGuid,
            description,
            episodeUrl,
          }) => ({
            episodeGuid,
            title: trackName,
            date: new Intl.DateTimeFormat("en-US").format(
              new Date(releaseDate)
            ),
            duration: msToTime(trackTimeMillis),
            link: `/podcast/${podcastId}/episode/${episodeGuid}`,
            description: description ?? "",
            url: episodeUrl ?? "",
          })
        ) ?? [],
    [data]
  );

  const selectedEpisode = useMemo(
    () =>
      episodes.find(({ episodeGuid }) => episodeGuid === episodeId) ?? {
        title: "",
        description: "",
        url: "",
      },
    [episodes, episodeId]
  );

  return { episodes, loading, selectedEpisode };
};
