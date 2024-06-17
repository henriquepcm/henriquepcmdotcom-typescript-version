import { render, screen } from "@testing-library/react";
import Projects from "../Projects";
import projectsData from "../../../data/projectsData";

describe("Projects", () => {
     beforeEach(() => {
          render(<Projects />);
     });

     it("finds Projects' H1", () => {
          const projectsH1 = screen.getByText(projectsData.h1);
          expect(projectsH1).toBeInTheDocument();
     });

     it("checks if the number of projects on the screen matches the object data number", () => {
          const expNumbInTheObject = projectsData.projects.length;
          const expNumOnTheScreen = screen.getAllByLabelText("Project Item");
          expect(expNumbInTheObject).toBe(expNumOnTheScreen.length);
     });
});
