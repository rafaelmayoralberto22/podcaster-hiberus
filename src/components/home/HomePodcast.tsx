import { useIsFetching } from "@tanstack/react-query";
import { useHomePodcast } from "../../helpers/hooks/useHomePodcast";
import LoadingPodcast from "../commons/loading/LoadingPodcast";
import HomeList from "./HomeList";
import HomeSearch from "./HomeSearch";

const HomePodcast = () => {
  const loading = useIsFetching();
  const { podcasts, onSearch } = useHomePodcast();

  if (loading) return <LoadingPodcast />;

  return (
    <div className="home-podcast">
      <HomeSearch count={podcasts.length} {...{ onSearch }} />

      <HomeList data={podcasts} />
    </div>
  );
};

export default HomePodcast;
