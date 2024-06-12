import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import aboutData from "../../data/aboutData";

function About(): JSX.Element {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-about"
               container="container-about"
          >
               <Heading1 isHome={false}>{aboutData.h1}</Heading1>
               <div className="space-y-5">
                    {aboutData.paragraphs.map((paragraph, index) => (
                         <p key={index}>{paragraph}</p>
                    ))}
                    <p>
                         <a
                              className="font-bold ml-1"
                              href="mailto:henriquepcm@gmail.com"
                         >
                              henriquepcm@gmail.com
                         </a>
                    </p>
               </div>
          </PageMainContent>
     );
}

export default About;
