import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import ProjectItem from "../ui/ProjectItem";
import projectsData from "../../data/projectsData";
import { Project } from "../../assets/types";

function Projects(): JSX.Element {
     return (
          <PageMainContent
               containerWrapper="container-wrapper-projects"
               container="container-projects"
          >
               <Heading1 isHome={false}>Projects</Heading1>
               {projectsData.map((project: Project, index: number) => (
                    <ProjectItem
                         key={index}
                         duration={project.duration}
                         name={project.name}
                         description={project.description}
                         link={project.link}
                    />
               ))}
          </PageMainContent>
     );
}

export default Projects;
