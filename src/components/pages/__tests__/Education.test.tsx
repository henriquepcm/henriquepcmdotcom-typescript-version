import { render, screen } from "@testing-library/react";
import Education from "../Education";
import educationData from "../../../data/educationData";

describe("Education", () => {
     beforeEach(() => {
          render(<Education />);
     });

     it("Fids Educations's H1", () => {
          const educationsH1 = screen.getByText(educationData.h1);
          expect(educationsH1).toBeInTheDocument();
     });

     it("Check if all colleges were rendered", () => {
          const colNumberInObject = educationData.colleges.length;
          const colNumberRendered = screen.getAllByLabelText("Education Item");
          expect(colNumberInObject).toBe(colNumberRendered.length);
     });
});
