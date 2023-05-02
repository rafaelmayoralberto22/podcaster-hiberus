import { render, screen } from "@testing-library/react";
import LoadingPodcast from "./LoadingPodcast";

describe("LoadingPodcast", () => {
  it("renders LoadingPodcast", () => {
    render(<LoadingPodcast />);
    const content = screen.getByRole("listitem");
    const items = content.children.length;

    expect(items).toEqual(12);
    expect(items).not.toEqual(9);
  });
  it("include box-loading", () => {
    render(<LoadingPodcast />);
    const content = screen.getByRole("listitem");
    const items = content.getElementsByClassName("box-loading");

    expect(items.length).toEqual(12);
  });
});
