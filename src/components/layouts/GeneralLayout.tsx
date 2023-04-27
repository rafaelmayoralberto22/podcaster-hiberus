import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import GeneralContent from "./content/GeneralContent";
import Header from "./header/Header";

const GeneralLayout: FC<PropsWithChildren> = () => {
  return (
    <>
      <Header />
      <GeneralContent>
        <Outlet />
      </GeneralContent>
    </>
  );
};

export default GeneralLayout;
