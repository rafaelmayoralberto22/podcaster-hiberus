import { usePodcastDetails } from "../../helpers/hooks/usePodcastDetails";
import { TwoComponentsLayout } from "../layouts/TwoComponentLayout";
import PodcastEpisodes from "./PodcastEpisodes";
import PodcastLateral from "./PodcastLateral";

const PodcastDetails = () => {
  const { data } = usePodcastDetails();
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
      second={
        <PodcastEpisodes
          count={66}
          episodes={[
            {
              title: "asdjhsdjhsd",
              date: "1/3/2016",
              duration: "14:00",
              link: "/podcast/1/episode/1",
            },
            {
              title: "Extranjero",
              date: "3/3/2016",
              duration: "14:00",
              link: "/podcast/1/episode/2",
            },
          ]}
        />
      }
    />
  );
};

export default PodcastDetails;
