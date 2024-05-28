import PageMainContent from "../ui/PageMainContent";
import Heading1 from "../ui/Heading1";
import Heading2 from "../ui/Heading2";

function Home(): JSX.Element {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-home"
               container="container-home"
          >
               <Heading1 isHome={true}>Henrique Pochmann</Heading1>
               <Heading2 isHome={true}>
                    Frontend developer with a knack for UI/UX design
               </Heading2>
          </PageMainContent>
     );
}

export default Home;
