import { FC, PropsWithChildren } from "react";

const GeneralContent: FC<PropsWithChildren> = ({ children }) => {
  return <div className="general-content">{children}</div>;
};

export default GeneralContent;
