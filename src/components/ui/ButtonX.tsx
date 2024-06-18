import { ToggleMenuProps } from "../../assets/types";

function ButtonX({ toggleMenu }: ToggleMenuProps): JSX.Element {
     return (
          <div className="ml-5 pt-5">
               <button
                    onClick={toggleMenu}
                    className="hover:cursor-pointer transition ease-linear hover:scale-90"
                    aria-label="Close main menu"
               >
                    <hr className="w-5 border-2 bg-white border-white rounded-sm rotate-45 translate-y-1" />
                    <hr className="w-5 border-2 bg-white border-white rounded-sm -rotate-45" />
               </button>
          </div>
     );
}

export default ButtonX;
