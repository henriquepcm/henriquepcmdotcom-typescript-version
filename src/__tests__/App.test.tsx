import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Burger Button integration", () => {
     it("check if menu opens and closes properly", async () => {
          render(<App />);

          const burgerButton = screen.getByLabelText("Open main menu");
          const menu = screen.getByTestId("menu");

          expect(menu).toHaveClass("-translate-x-full");

          await userEvent.click(burgerButton);
          expect(menu).not.toHaveClass("-translate-x-full");

          const xButton = screen.getByLabelText("Close main menu");
          await userEvent.click(xButton);
          expect(menu).toHaveClass("-translate-x-full");
     });
});
