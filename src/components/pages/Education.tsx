import EducationItem from "../ui/EducationItem";
import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import educationData from "../../data/educationData";
import { College } from "../../assets/types";

function Education(): JSX.Element {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-education"
               container="container-education"
          >
               <Heading1 isHome={false}>Education</Heading1>
               {educationData.colleges.map(
                    (college: College, index: number) => (
                         <EducationItem
                              key={index}
                              duration={college.duration}
                              college={college.college}
                              title={college.title}
                         />
                    )
               )}
          </PageMainContent>
     );
}

export default Education;
