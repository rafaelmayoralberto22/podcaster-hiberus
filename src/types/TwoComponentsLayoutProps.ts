export type TwoComponentsLayoutProps = {
  type: LAYOUT_VIEW;
  first: JSX.Element;
  second: JSX.Element;
};

export type LAYOUT_VIEW = "vertical" | "horizontal";
