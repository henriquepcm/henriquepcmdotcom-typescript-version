import { render, screen } from "@testing-library/react";
import Skills from "../Skills";
import skillsData from "../../../data/skillsData";

describe("Skills", () => {
     beforeEach(() => {
          render(<Skills />);
     });

     it("finds Skills' H1", () => {
          const skillsH1 = screen.getByText(skillsData.h1);
          expect(skillsH1).toBeInTheDocument();
     });

     it("checks if the number of skill categories on the screen matches the object data number", () => {
          const skillCatNumbInTheObject = skillsData.skills.length;
          const skillCatNumbOnTheScreen =
               screen.getAllByLabelText("Skills Item");
          expect(skillCatNumbInTheObject).toBe(skillCatNumbOnTheScreen.length);
     });
});
