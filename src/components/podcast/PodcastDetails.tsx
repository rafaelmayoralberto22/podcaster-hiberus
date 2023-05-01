import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import PodcastEpisodeContext from "../../helpers/contexts/PodcastEpisodeContext";
import LoadingBox from "../loading/LoadingBox";
import PodcastEpisodes from "./PodcastEpisodes";

const PodcastDetails = () => {
  const { episodes, loading } = useContext(PodcastEpisodeContext);

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
