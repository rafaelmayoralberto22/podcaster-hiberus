import { useContext } from "react";
import PodcastEpisodeContext from "../contexts/PodcastEpisodeContext";

export const usePodcastEpisodeContext = () => useContext(PodcastEpisodeContext);
