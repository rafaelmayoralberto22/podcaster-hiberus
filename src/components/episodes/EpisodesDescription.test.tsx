import { render } from "@testing-library/react";
import EpisodesDescription from "./EpisodesDescription";

describe("EpisodesDescription", () => {
  it("renders EpisodesDescription", () => {
    const title = "Title",
      description = "Description",
      url = "lcal/here";

    const { getByText, getByTitle } = render(
      <EpisodesDescription {...{ title, description, url }} />
    );

    const titleScreen = getByText(title);
    const descriptionScreen = getByText(description);

    const urlScreen = getByTitle("audio-podcast");
    const urlAttr = urlScreen.getAttribute("src");

    expect(titleScreen).toBeInTheDocument();
    expect(descriptionScreen).toBeInTheDocument();
    expect(urlAttr).toEqual(url);
  });
});
