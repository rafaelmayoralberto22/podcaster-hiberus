import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import GlobalStoreContext from "../../helpers/contexts/GlobalStoreContext";
import { usePodcastDetails } from "../../helpers/hooks/usePodcastDetails";
import EmptyList from "../empty/EmptyList";
import LoadingBox from "../loading/LoadingBox";
import EpisodesDescription from "./EpisodesDescription";

const EpisodesDetails = () => {
  const { loading } = useContext(GlobalStoreContext);
  const { selectedEpisode } = usePodcastDetails();
  const { title, description, url } = selectedEpisode;

  if (loading) {
    return <Skeleton wrapper={LoadingBox} height="50vh" width="100%" />;
  }

  if (!title && !description) return <EmptyList />;

  return <EpisodesDescription {...{ title, description, url }} />;
};

export default EpisodesDetails;
