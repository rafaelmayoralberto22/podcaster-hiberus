import { usePodcastDetails } from "../../helpers/hooks/usePodcastDetails";
import { TwoComponentsLayout } from "../layouts/TwoComponentLayout";
import PodcastLateral from "../podcast/PodcastLateral";
import EpisodesDescription from "./EpisodesDescription";

const EpisodesDetails = () => {
  const { selectedEpisode } = usePodcastDetails();
  const { title, description, url } = selectedEpisode;

  return (
    <TwoComponentsLayout
      type="HORIZONTAL"
      first={
        <PodcastLateral
          author="Rafa"
          description="dhsdjhsdkjshdkjasdhkajsdh"
          img="https://is4-ssl.mzstatic.com/image/thumb/Podcasts116/v4/71/03/ce/7103ce33-a0ab-775d-4cb5-b4e2444a31df/mza_17930232982653640491.jpg/55x55bb.png"
          title="ahjsdfjsdhasd"
        />
      }
      second={<EpisodesDescription {...{ title, description, url }} />}
    />
  );
};

export default EpisodesDetails;
