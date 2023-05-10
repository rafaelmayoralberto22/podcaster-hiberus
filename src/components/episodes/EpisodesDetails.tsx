import { useIsFetching } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { usePodcastDetails } from "../../helpers/hooks/usePodcastDetails";
import EmptyList from "../commons/empty/EmptyList";
import LoadingBox from "../commons/loading/LoadingBox";
import EpisodesDescription from "./EpisodesDescription";

const EpisodesDetails = () => {
  const loading = useIsFetching();
  const { selectedEpisode } = usePodcastDetails();
  const { title, description, url } = selectedEpisode;

  if (loading) {
    return <Skeleton wrapper={LoadingBox} height="50vh" width="100%" />;
  }

  if (!title && !description) return <EmptyList />;

  return <EpisodesDescription {...{ title, description, url }} />;
};

export default EpisodesDetails;
