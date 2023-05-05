import { useContext } from "react";
import GlobalStoreContext from "../../helpers/contexts/GlobalStoreContext";
import { useHomePodcast } from "../../helpers/hooks/useHomePodcast";
import LoadingPodcast from "../loading/LoadingPodcast";
import HomeList from "./HomeList";
import HomeSearch from "./HomeSearch";

const HomePodcast = () => {
  const { podcasts, onSearch } = useHomePodcast();
  const { loading } = useContext(GlobalStoreContext);

  if (loading) return <LoadingPodcast />;

  return (
    <div className="home-podcast">
      <HomeSearch count={podcasts.length} {...{ onSearch }} />

      <HomeList data={podcasts} />
    </div>
  );
};

export default HomePodcast;
