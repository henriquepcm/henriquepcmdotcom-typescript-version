import CertificationItem from "../ui/CertificationItem";
import Heading1 from "../ui/Heading1";
import PageMainContent from "../ui/PageMainContent";
import certificationsData from "../../data/certificationsData";
import { Certification } from "../../assets/types";

function Certifications(): JSX.Element {
     let previousYear: number | null = null;

     return (
          <PageMainContent
               containerWrapper="container-wrapper-certifications"
               container="container-certifications"
          >
               <Heading1 isHome={false}>{certificationsData.h1}</Heading1>
               <ul>
                    {certificationsData.certificationsInfo.map(
                         (certification: Certification, index: number) => {
                              const { year } = certification;
                              const showYear = year !== previousYear;
                              previousYear = year;
                              return (
                                   <CertificationItem
                                        key={index}
                                        year={certification.year}
                                        link={certification.link}
                                        title={certification.title}
                                        showYear={showYear}
                                   />
                              );
                         }
                    )}
               </ul>
          </PageMainContent>
     );
}

export default Certifications;
