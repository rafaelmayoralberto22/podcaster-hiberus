import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { useLoadingLocation } from "../../helpers/hooks/useLoadingLocation";
import { RouterLoading } from "../loading/RouterLoading";
import GeneralContent from "./content/GeneralContent";
import Header from "./header/Header";

const GeneralLayout: FC<PropsWithChildren> = () => {
  const { loading } = useLoadingLocation();

  return (
    <>
      <Header />
      {loading && <RouterLoading />}
      <GeneralContent>
        <Outlet />
      </GeneralContent>
    </>
  );
};

export default GeneralLayout;
