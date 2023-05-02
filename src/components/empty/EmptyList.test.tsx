import { screen } from "@testing-library/react";
import { renderWithReactIntl } from "../../helpers/tests";
import EmptyList from "./EmptyList";

describe("EmptyList", () => {
  it("renders EmptyList", () => {
    renderWithReactIntl(<EmptyList />);

    const img = screen.getByAltText("no data");

    expect(img).toBeInTheDocument();
  });
});