import { FC, PropsWithChildren, createContext, useState } from "react";
import { PodcastEpisodeContextProps } from "../../types/PodcastEpisodeContextProps";
import { Episode } from "../../types/PodcastEpisodesListProps";

const PodcastEpisodeContext = createContext<PodcastEpisodeContextProps>(
  {} as PodcastEpisodeContextProps
);

const PodcastEpisodeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
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
