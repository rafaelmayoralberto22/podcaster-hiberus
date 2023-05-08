import { screen } from "@testing-library/react";
import EmptyList from "./EmptyList";
import { renderWithReactIntl } from "../../../helpers/tests";

describe("EmptyList", () => {
  it("renders EmptyList", () => {
    renderWithReactIntl(<EmptyList />);

    const img = screen.getByTestId("no-data");

    expect(img).toBeInTheDocument();
  });
});
