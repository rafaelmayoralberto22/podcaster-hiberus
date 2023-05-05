import { fireEvent, screen } from "@testing-library/react";
import { renderWithReactIntl } from "../../helpers/tests";
import HomeSearch from "./HomeSearch";

describe("HomeSearch", () => {
  it("renders HomeSearch", () => {
    let aux = "";

    renderWithReactIntl(
      <HomeSearch
        count={100}
        onSearch={(text: string) => {
          aux = text;
        }}
      />
    );
    const count = screen.getByText("100");
    const search = screen.getByRole("search");
    fireEvent.change(search, { key: "T", target: { value: "T" } });

    expect(aux).toEqual("T");
    expect(aux).not.toEqual("S");
    expect(count).toBeInTheDocument();
  });
});
