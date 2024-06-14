import { render, screen } from "@testing-library/react";
import aboutData from "../../../data/aboutData";
import About from "../About";

describe("About", () => {
     beforeEach(() => {
          render(<About />);
     });

     it("finds About's H1 title", () => {
          const aboutsH1 = screen.getByText(aboutData.h1);
          expect(aboutsH1).toBeInTheDocument();
     });

     it("finds all paragraphs on About's text", () => {
          aboutData.paragraphs.forEach((paragraph: string) => {
               const paragraphFound = screen.getByText(paragraph);
               expect(paragraphFound).toBeInTheDocument();
          });
     });

     it("finds the email address and checks for the correct link", () => {
          const emailLink = screen.getByText(aboutData.email);
          expect(emailLink).toBeInTheDocument();
          expect(emailLink.closest("a")).toHaveAttribute(
               "href",
               `mailto:${aboutData.email}`
          );
     });
});
