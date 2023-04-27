import { FC, PropsWithChildren } from "react";
import GeneralContent from "./content/GeneralContent";
import Header from "./header/Header";

const GeneralLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <GeneralContent>{children}</GeneralContent>
    </>
  );
};

export default GeneralLayout;
