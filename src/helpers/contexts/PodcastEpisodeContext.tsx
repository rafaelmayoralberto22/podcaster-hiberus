import { FC, PropsWithChildren, createContext, useState } from "react";
import { PodcastEpisodeContextProps } from "../../types/PodcastEpisodeContextProps";
import { Episode } from "../../types/PodcastEpisodesListProps";

const PodcastEpisodeContext = createContext<PodcastEpisodeContextProps>(
  {} as PodcastEpisodeContextProps
);

const PodcastEpisodeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  return (
    <PodcastEpisodeContext.Provider value={{ episodes, setEpisodes }}>
      {children}
    </PodcastEpisodeContext.Provider>
  );
};

export { PodcastEpisodeContextProvider };
export default PodcastEpisodeContext;
