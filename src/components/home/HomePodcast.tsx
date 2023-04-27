import { useHomePodcast } from "../../helpers/hooks/useHomePodcast";
import HomeList from "./HomeList";
import HomeSearch from "./HomeSearch";

const HomePodcast = () => {
  const { podcasts, onSearch } = useHomePodcast();

  return (
    <div className="home-podcast">
      <HomeSearch count={podcasts.length} {...{ onSearch }} />

      <HomeList data={podcasts} />
    </div>
  );
};

export default HomePodcast;
