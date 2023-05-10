import { useIsFetching } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { RouterLoading } from "../loading/RouterLoading";
import GeneralContent from "./content/GeneralContent";
import Header from "./header/Header";

const GeneralLayout = () => {
  const loading = useIsFetching();

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
