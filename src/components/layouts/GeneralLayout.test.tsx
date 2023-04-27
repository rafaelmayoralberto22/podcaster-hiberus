import { screen } from "@testing-library/react";
import { renderWithReactIntl } from "../../helpers/test";
import GeneralLayout from "./GeneralLayout";

describe("GeneralLayout", () => {
  it("renders General Layout Content", () => {
    renderWithReactIntl(
      <GeneralLayout>
        <div>Hello</div>
      </GeneralLayout>
    );
    const content = screen.getByText("Hello");
    expect(content).toBeTruthy();
  });

  it("render Logo", () => {
    renderWithReactIntl(
      <GeneralLayout>
        <div>Hello</div>
      </GeneralLayout>
    );
    const content = screen.getByText("Podcaster");
    expect(content).toBeInTheDocument();
  });
});
