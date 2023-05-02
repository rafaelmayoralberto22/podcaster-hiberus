import PodcastDetails from "../components/podcast/PodcastDetails";
import PodcastInfo from "../components/podcast/PodcastInfo";
import { PodcastEpisodeContextProvider } from "../helpers/contexts/PodcastEpisodeContext";

const Podcast = () => {
  return (
    <PodcastEpisodeContextProvider>
      <PodcastInfo>
        <PodcastDetails />
      </PodcastInfo>
    </PodcastEpisodeContextProvider>
  );
};

export default Podcast;
