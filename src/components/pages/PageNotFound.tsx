import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";

function PageNotFound(): JSX.Element {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-notfound"
               container="container-notfound"
          >
               <Heading1 isHome={false}>No results</Heading1>
               <p>Sorry, page not found. :(</p>
          </PageMainContent>
     );
}

export default PageNotFound;
