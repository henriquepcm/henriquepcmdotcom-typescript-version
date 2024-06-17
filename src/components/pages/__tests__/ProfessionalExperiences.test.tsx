import { render, screen } from "@testing-library/react";
import ProfessionalExperiences from "../ProfessionalExperiences";
import experiencesData from "../../../data/professionalExperiencesData";

describe("Professional Experiences", () => {
     beforeEach(() => {
          render(<ProfessionalExperiences />);
     });

     it("finds Professional Experiences's H1", () => {
          const profExpH1 = screen.getByText(experiencesData.h1);
          expect(profExpH1).toBeInTheDocument();
     });

     it("checks if the number of experiences on the screen matches the object data number", () => {
          const expNumInTheScreen = screen.getAllByLabelText("Experince Item");
          const expNumbInTheObject = experiencesData.experiences.length;
          expect(expNumbInTheObject).toBe(expNumInTheScreen.length);
     });
});
