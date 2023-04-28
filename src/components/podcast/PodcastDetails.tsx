import Skeleton from "react-loading-skeleton";
import { usePodcastDetails } from "../../helpers/hooks/usePodcastDetails";
import PodcastEpisodes from "./PodcastEpisodes";
import LoadingBox from "../loading/LoadingBox";

const PodcastDetails = () => {
  const { episodes, loading } = usePodcastDetails();

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
