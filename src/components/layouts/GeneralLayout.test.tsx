import { screen } from "@testing-library/react";
import { renderWithReactIntl } from "../../helpers/test";
import GeneralLayout from "./GeneralLayout";

describe("App", () => {
  it("renders General Layout", () => {
    renderWithReactIntl(
      <GeneralLayout>
        <div>Hello</div>
      </GeneralLayout>
    );
    const headline = screen.getByText("Hello");
    expect(headline).toBeTruthy();
  });
});
