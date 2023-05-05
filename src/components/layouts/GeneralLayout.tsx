import { useContext } from "react";
import { Outlet } from "react-router-dom";
import GlobalStoreContext from "../../helpers/contexts/GlobalStoreContext";
import { RouterLoading } from "../loading/RouterLoading";
import GeneralContent from "./content/GeneralContent";
import Header from "./header/Header";

const GeneralLayout = () => {
  const { loading } = useContext(GlobalStoreContext);

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
