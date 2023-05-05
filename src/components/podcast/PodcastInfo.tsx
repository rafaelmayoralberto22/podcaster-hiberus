import { FC, PropsWithChildren, useContext } from "react";
import GlobalStoreContext from "../../helpers/contexts/GlobalStoreContext";
import { usePodcastInfo } from "../../helpers/hooks/usePodcastInfo";
import EmptyList from "../empty/EmptyList";
import { TwoComponentsLayout } from "../layouts/TwoComponentLayout";
import PodcastLateral from "./PodcastLateral";

const PodcastInfo: FC<PropsWithChildren> = ({ children }) => {
  const { loading } = useContext(GlobalStoreContext);
  const { info } = usePodcastInfo();
  const { author, description, img, title, link } = info;

  if ((!title || !author) && !loading) return <EmptyList />;

  return (
    <TwoComponentsLayout
      type="HORIZONTAL"
      first={
        <PodcastLateral
          {...{ author, description, img, title, link, loading }}
        />
      }
      second={<>{children}</>}
    />
  );
};

export default PodcastInfo;
