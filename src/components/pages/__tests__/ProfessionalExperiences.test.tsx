import { render, screen } from "@testing-library/react";
import ProfessionalExperiences from "../ProfessionalExperiences";
import experiencesData from "../../../data/professionalExperiencesData";

describe("Professional Experiences", () => {
     beforeEach(() => {
          render(<ProfessionalExperiences />);
     });

     it("Finds Professional Experiences's H1", () => {
          const profExpH1 = screen.getByText(experiencesData.h1);
          expect(profExpH1).toBeInTheDocument();
     });
});
