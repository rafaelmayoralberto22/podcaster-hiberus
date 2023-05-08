import { FC } from "react";
import { TwoComponentsLayoutProps } from "../../../types/TwoComponentsLayoutProps";

export const TwoComponentsLayout: FC<TwoComponentsLayoutProps> = ({
  type,
  first,
  second,
}) => {
  return (
    <div
      className={`two-componets-layout two-componets-layout__${type.toLowerCase()}`}
      style={{ flexDirection: type === "HORIZONTAL" ? "row" : "column" }}
    >
      <div>{first}</div>
      <div className={`second-${type.toLowerCase()}`}>{second}</div>
    </div>
  );
};
