import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { CertificationItemProps } from "../../assets/types";

function CertificationItem({
     year,
     link,
     title,
     showYear,
}: CertificationItemProps): JSX.Element {
     return (
          <li>
               {showYear && <div>{year}</div>}
               <div className="flex">
                    <p
                         className="vertical-line"
                         aria-label="Certification Item"
                    >
                         {link ? (
                              <a
                                   className="link-inline"
                                   href={link}
                                   target="_blank"
                              >
                                   {title}{" "}
                                   <FontAwesomeIcon
                                        className="ml-1 w-3 transition ease-linear hover:scale-90"
                                        icon={faArrowUpRightFromSquare}
                                   />
                              </a>
                         ) : (
                              `${title} `
                         )}
                    </p>
               </div>
          </li>
     );
}

export default CertificationItem;
