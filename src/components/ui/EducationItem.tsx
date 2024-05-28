import { College } from "../../assets/types";

function EducationItem({ duration, college, title }: College): JSX.Element {
     return (
          <>
               <div>{duration}</div>
               <div className="flex">
                    <div className="vertical-line">
                         <span className="font-bold">{college}</span>
                         <br />
                         <span>{title}</span>
                    </div>
               </div>
          </>
     );
}

export default EducationItem;
