import { FC } from "react";
import { TwoComponentsLayoutProps } from "../../../types/TwoComponentsLayoutProps";

export const TwoComponentsLayout: FC<TwoComponentsLayoutProps> = ({
  type,
  first,
  second,
}) => {
  return (
    <div
      className={`two-componets-layout two-componets-layout__${type}`}
      style={{ flexDirection: type === "horizontal" ? "row" : "column" }}
    >
      <div>{first}</div>
      <div className={`second-${type}`}>{second}</div>
    </div>
  );
};
