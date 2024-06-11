import { render, RenderResult } from "@testing-library/react";
import Home from "../Home";
import homeData from "../../../data/homeData";

describe("Home", () => {
     let homeComponent: RenderResult;
     let getByText: RenderResult["getByText"];

     beforeEach(() => {
          homeComponent = render(<Home />);
          getByText = homeComponent.getByText;
     });

     it("finds Home's H1", () => {
          const homesH1 = getByText(homeData.h1);
          expect(homesH1).toBeInTheDocument();
     });

     it("finds Home's H2", () => {
          const homesH2 = getByText(homeData.h2);
          expect(homesH2).toBeInTheDocument();
     });
});
