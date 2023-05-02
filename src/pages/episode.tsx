import EpisodesDetails from "../components/episodes/EpisodesDetails";
import PodcastInfo from "../components/podcast/PodcastInfo";
import { PodcastEpisodeContextProvider } from "../helpers/contexts/PodcastEpisodeContext";

const Episode = () => {
  return (
    <PodcastEpisodeContextProvider>
      <PodcastInfo>
        <EpisodesDetails />
      </PodcastInfo>
    </PodcastEpisodeContextProvider>
  );
};

export default Episode;
