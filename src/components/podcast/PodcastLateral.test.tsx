import { screen } from "@testing-library/react";
import { renderWithReactIntl } from "../../helpers/tests";
import PodcastLateral from "./PodcastLateral";

const img = "http://img.com",
  author = "Author 1",
  description = "Description",
  title = "Title",
  link = "https://www.test.com/";

describe("PodcastLateral", () => {
  it("renders PodcastLateral", () => {
    renderWithReactIntl(
      <PodcastLateral {...{ img, author, description, title, link }} />
    );

    const titleScreen = screen.getByText(title);
    const authorScreen = screen.getByText(`by ${author}`);
    const descriptionScreen = screen.getByText(description);

    expect(titleScreen).toBeInTheDocument();
    expect(authorScreen).toBeInTheDocument();
    expect(descriptionScreen).toBeInTheDocument();
    expect(titleScreen.closest("a")).toHaveAttribute("href", link);
  });
});
