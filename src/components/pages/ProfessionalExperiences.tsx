import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import ExperienceItem from "../ui/ExperienceItem";
import experiencesData from "../../data/professionalExperiencesData";
import { Experience } from "../../assets/types";

function ProfessionalExperiences(): JSX.Element {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-experiences"
               container="container-experiences"
          >
               <Heading1 isHome={false}>PROFESSIONAL EXPERIENCES</Heading1>
               {experiencesData.map((experience: Experience, index: number) => (
                    <ExperienceItem key={index} experience={experience} />
               ))}
          </PageMainContent>
     );
}

export default ProfessionalExperiences;
