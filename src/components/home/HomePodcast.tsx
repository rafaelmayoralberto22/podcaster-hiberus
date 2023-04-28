import { useHomePodcast } from "../../helpers/hooks/useHomePodcast";
import LoadingPodcast from "../loading/LoadingPodcast";
import HomeList from "./HomeList";
import HomeSearch from "./HomeSearch";

const HomePodcast = () => {
  const { podcasts, loading, onSearch } = useHomePodcast();

  if (loading) return <LoadingPodcast />;

  return (
    <div className="home-podcast">
      <HomeSearch count={podcasts.length} {...{ onSearch }} />

      <HomeList data={podcasts} />
    </div>
  );
};

export default HomePodcast;
