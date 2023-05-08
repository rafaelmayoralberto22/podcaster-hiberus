import { Outlet } from "react-router-dom";
import { useGlobalStoreContext } from "../../../helpers/hooks/useGlobalStoreContext";
import { RouterLoading } from "../loading/RouterLoading";
import GeneralContent from "./content/GeneralContent";
import Header from "./header/Header";

const GeneralLayout = () => {
  const { loading } = useGlobalStoreContext();

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
