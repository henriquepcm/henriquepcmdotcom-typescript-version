import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonBurger from "../ButtonBurger";

describe("ButtonBurger", () => {
     it("renders properly", () => {
          render(<ButtonBurger toggleMenu={() => {}} />);
     });
     it("toggles menu when clicked", async () => {
          const toggleMenu = jest.fn();
          render(<ButtonBurger toggleMenu={toggleMenu} />);
          const button = screen.getByLabelText("Open main menu");
          await userEvent.click(button);
          expect(toggleMenu).toHaveBeenCalledTimes(1);
     });
});
