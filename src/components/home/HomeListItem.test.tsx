import { screen, waitFor } from "@testing-library/react";
import { item, renderWithReactIntl } from "../../helpers/test";
import HomeListItem from "./HomeListItem";

describe("HomeListItem", () => {
  it("renders HomeListItem", () => {
    renderWithReactIntl(<HomeListItem {...{ item }} />);
    const name = screen.getAllByText(item["im:name"].label);
    const artist = screen.getAllByText(`Author: ${item["im:artist"].label}`);
    const img = screen.getAllByRole("img");

    waitFor(() => {
      expect(name).toBeInTheDocument();
      expect(artist).toBeInTheDocument();
      expect(img).toBeInTheDocument();
    });
  });
});
