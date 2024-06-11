import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import TagList from "../ui/TagList";
import skillsData from "../../data/skillsData";

function Skills(): JSX.Element {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-skills"
               container="container-skills"
          >
               <Heading1 isHome={false}>Skills, Tools and Languages</Heading1>

               <span className="mt-5 font-bold">Hard Skills</span>
               <TagList tags={skillsData.hardSkills} />

               <span className="mt-5 font-bold">Complementary Skills</span>
               <TagList tags={skillsData.compSkills} />

               <span className="mt-5 font-bold">Soft Skills</span>
               <TagList tags={skillsData.softSkills} />

               <span className="mt-5 font-bold">Tools</span>
               <TagList tags={skillsData.tools} />

               <span className="mt-5 font-bold">Languages</span>
               <TagList tags={skillsData.languages} />
          </PageMainContent>
     );
}

export default Skills;
