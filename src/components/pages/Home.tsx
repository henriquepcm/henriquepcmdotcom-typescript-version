import PageMainContent from "../ui/PageMainContent";
import Heading1 from "../ui/Heading1";
import Heading2 from "../ui/Heading2";
import home from "../../data/homeData";

function Home(): JSX.Element {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-home"
               container="container-home"
          >
               <Heading1 isHome={true}>{home.h1}</Heading1>
               <Heading2 isHome={true}>{home.h2}</Heading2>
          </PageMainContent>
     );
}

export default Home;
