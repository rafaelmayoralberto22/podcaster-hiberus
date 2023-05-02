import { screen } from "@testing-library/react";
import { episodes, renderWithReactIntl } from "../../helpers/tests";
import PodcastEpisodesList from "./PodcastEpisodesList";

describe("PodcastEpisodesList", () => {
  it("renders PodcastEpisodesList", () => {
    renderWithReactIntl(<PodcastEpisodesList {...{ episodes }} />);
    const content = screen.getByRole("list");
    const lineHeader = content.getElementsByClassName("line__header");

    const separator = screen.getAllByRole("separator");

    const title1 = screen.getByText(episodes[0].title);

    expect(lineHeader.length).toEqual(1);
    expect(separator.length).toEqual(episodes.length);
    expect(title1).toBeInTheDocument();
  });
});
