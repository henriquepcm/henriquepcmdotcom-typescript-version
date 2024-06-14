import { render, screen } from "@testing-library/react";
import Certifications from "../Certifications";
import certificationsData from "../../../data/certificationsData";

describe("Certifications", () => {
     beforeEach(() => {
          render(<Certifications />);
     });

     it("Finds Certifications' H1", () => {
          const certificationsH1 = screen.getByText(certificationsData.h1);
          expect(certificationsH1).toBeInTheDocument();
     });

     it("Check if all certifications were rendered", () => {
          const certNumbInObject = certificationsData.certificationsInfo.length;
          const certNumbRendered =
               screen.queryAllByLabelText("Certification Item");
          expect(certNumbInObject).toBe(certNumbRendered.length);
     });

     it("Check if the links, for elements with link, are rendering correct", () => {
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
