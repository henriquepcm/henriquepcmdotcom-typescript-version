import { useMenu } from "./hooks/useMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer, Menu } from "./components/ui";
import {
     Home,
     About,
     Education,
     ProfessionalExperiences,
     Projects,
     Skills,
     PageNotFound,
     Certifications,
} from "./components/pages";

import ReactGA from "react-ga4";
ReactGA.initialize("G-E01V9872F7");

function App(): JSX.Element {
     const { menuIsOpen, toggleMenu, closeMenu, menuRef } = useMenu();

     return (
          <>
               <BrowserRouter>
                    <Menu
                         menuIsOpen={menuIsOpen}
                         toggleMenu={toggleMenu}
                         menuRef={menuRef}
                    />
                    <Header toggleMenu={toggleMenu} closeMenu={closeMenu} />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="about" element={<About />} />
                         <Route
                              path="certifications"
                              element={<Certifications />}
                         />
                         <Route path="education" element={<Education />} />
                         <Route
                              path="professional-experiences"
                              element={<ProfessionalExperiences />}
                         />
                         <Route path="projects" element={<Projects />} />
                         <Route path="skills" element={<Skills />} />
                         <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
               </BrowserRouter>
          </>
     );
}

export default App;
