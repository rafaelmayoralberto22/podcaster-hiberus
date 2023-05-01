import { FC, PropsWithChildren, createContext, useState } from "react";
import { PodcastEpisodeContextProps } from "../../types/PodcastEpisodeContextProps";

const PodcastEpisodeContext = createContext<PodcastEpisodeContextProps>({
  episodes: [],
  loading: false,
  setEpisodes: () => {},
  setLoading: () => {},
});

const PodcastEpisodeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [episodes, setEpisodes] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <PodcastEpisodeContext.Provider
      value={{ episodes, setEpisodes, loading, setLoading }}
    >
      {children}
    </PodcastEpisodeContext.Provider>
  );
};

export { PodcastEpisodeContextProvider };
export default PodcastEpisodeContext;
