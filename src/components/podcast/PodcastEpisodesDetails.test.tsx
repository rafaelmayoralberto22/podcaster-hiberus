import { screen } from "@testing-library/react";
import { renderWithReactIntl } from "../../helpers/tests";
import PodcastEpisodesDetails from "./PodcastEpisodesDetails";

describe("PodcastEpisodesDetails", () => {
  it("renders PodcastEpisodesDetails", () => {
    const count = 9;
    renderWithReactIntl(<PodcastEpisodesDetails {...{ count }} />);
    const content = screen.getByText("Episodes: 9");

    expect(content).toBeInTheDocument();
  });
});
