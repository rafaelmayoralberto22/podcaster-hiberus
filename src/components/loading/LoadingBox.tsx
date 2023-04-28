import { PropsWithChildren } from "react";

const LoadingBox = ({ children }: PropsWithChildren<unknown>) => {
  return <div className="box-loading">{children}</div>;
};

export default LoadingBox;
