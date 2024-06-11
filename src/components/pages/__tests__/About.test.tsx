import { render, RenderResult } from "@testing-library/react";
import About from "../About";

describe("About", () => {
     let aboutComponent: RenderResult;
     let getByText: RenderResult["getByText"];

     beforeEach(() => {
          aboutComponent = render(<About />);
          getByText = aboutComponent.getByText;
     });

     it("finds About's H1", () => {
          const aboutsH1 = getByText("About Henrique Pochmann");
          expect(aboutsH1).toBeInTheDocument();
     });

     it("finds first phrase of the first paragraph", () => {
          const firstP = getByText(
               /I'm Henrique Pochmann from Porto Alegre\/RS - Brazil \(GMT-3\)/i
          );
          expect(firstP).toBeInTheDocument();
     });

     it("finds first phrase of the second paragraph", () => {
          const secondP = getByText(
               "Development aside, a few topics I am particularly interested in are investments, learning languages, music, and making pizza/burgers."
          );
          expect(secondP).toBeInTheDocument();
     });

     it("finds first phrase of the third paragraph", () => {
          const thirdP = getByText(/Am I a good fit for your project\?/i);
          expect(thirdP).toBeInTheDocument();
     });

     it("finds the email address and checks for the correct link.", () => {
          const emailLink = getByText("henriquepcm@gmail.com");
          expect(emailLink).toBeInTheDocument();
          expect(emailLink.closest("a")).toHaveAttribute(
               "href",
               "mailto:henriquepcm@gmail.com"
          );
     });
});
