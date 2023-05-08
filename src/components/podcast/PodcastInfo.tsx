import { FC, PropsWithChildren } from "react";
import { useGlobalStoreContext } from "../../helpers/hooks/useGlobalStoreContext";
import { usePodcastInfo } from "../../helpers/hooks/usePodcastInfo";
import EmptyList from "../commons/empty/EmptyList";
import { TwoComponentsLayout } from "../commons/layouts/TwoComponentLayout";
import PodcastLateral from "./PodcastLateral";

const PodcastInfo: FC<PropsWithChildren> = ({ children }) => {
  const { loading } = useGlobalStoreContext();
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
