import { render, screen } from "@testing-library/react";
import Certifications from "../Certifications";
import certificationsData from "../../../data/certificationsData";

describe("Certifications", () => {
     beforeEach(() => {
          render(<Certifications />);
     });

     it("finds Certifications' H1", () => {
          const certificationsH1 = screen.getByText(certificationsData.h1);
          expect(certificationsH1).toBeInTheDocument();
     });

     it("checks if the number of certifications on the screen matches the object data number.", () => {
          const certNumbInObject = certificationsData.certificationsInfo.length;
          const certNumbRendered =
               screen.queryAllByLabelText("Certification Item");
          expect(certNumbInObject).toBe(certNumbRendered.length);
     });

     it("check if the links, for elements with link, are rendering correct", () => {
          certificationsData.certificationsInfo.forEach((certificate) => {
               if (certificate.link) {
                    const certLink = screen.getByRole("link", {
                         name: certificate.title,
                    });
                    expect(certLink.closest("a")).toHaveAttribute(
                         "href",
                         certificate.link
                    );
               }
          });
     });
});
