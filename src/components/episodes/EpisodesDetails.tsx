import Skeleton from "react-loading-skeleton";
import { usePodcastDetails } from "../../helpers/hooks/usePodcastDetails";
import LoadingBox from "../loading/LoadingBox";
import EpisodesDescription from "./EpisodesDescription";

const EpisodesDetails = () => {
  const { selectedEpisode, loading } = usePodcastDetails();
  const { title, description, url } = selectedEpisode;

  if (loading) {
    return <Skeleton wrapper={LoadingBox} height="50vh" width="100%" />;
  }

  return <EpisodesDescription {...{ title, description, url }} />;
};

export default EpisodesDetails;
