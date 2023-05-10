import { useIsFetching } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { usePodcastEpisodeContext } from "../../helpers/hooks/usePodcastEpisodeContext";
import LoadingBox from "../commons/loading/LoadingBox";
import PodcastEpisodes from "./PodcastEpisodes";

const PodcastDetails = () => {
  const { episodes } = usePodcastEpisodeContext();
  const loading = useIsFetching();

  if (loading) {
    return (
      <div style={{ height: "60vh" }}>
        <Skeleton wrapper={LoadingBox} height={35} />
        <Skeleton wrapper={LoadingBox} height="calc(50vh - 55px)" />
      </div>
    );
  }

  return <PodcastEpisodes count={episodes?.length ?? 0} {...{ episodes }} />;
};

export default PodcastDetails;
