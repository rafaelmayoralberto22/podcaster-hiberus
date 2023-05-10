import { screen } from "@testing-library/react";
import { item, renderWithReactIntl } from "../../helpers/tests";
import HomeListItem from "./HomeListItem";

describe("HomeListItem", () => {
  it("renders HomeListItem", () => {
    renderWithReactIntl(<HomeListItem {...{ item }} />);
    const name = screen.getByText(item.label);
    const artist = screen.getByText(`Author: ${item.author}`);
    const img = screen.getByRole("img");

    expect(name).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
