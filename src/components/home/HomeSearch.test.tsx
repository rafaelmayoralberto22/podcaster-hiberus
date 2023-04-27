import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithReactIntl } from "../../helpers/test";
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
    const count = screen.getAllByText("100");
    const search = screen.getByRole("search");
    fireEvent.keyUp(search, { key: "T", target: { value: "T" } });

    expect(aux).toEqual("T");
    expect(aux).not.toEqual("S");

    waitFor(() => {
      expect(count).toBeInTheDocument();
    });
  });
});
