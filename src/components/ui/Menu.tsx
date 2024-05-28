import ButtonX from "./ButtonX";
import MenuItem from "./MenuItem";
import menuItems from "../../data/menuData";
import { MenuProps } from "../../assets/types";

function Menu({ menuIsOpen, toggleMenu, menuRef }: MenuProps): JSX.Element {
     return (
          <>
               <div
                    ref={menuRef}
                    className={`flex fixed inset-y-0 left-0 bg-black w-1/2 md:w-1/4 z-50 duration-300 ${
                         !menuIsOpen ? "-translate-x-full" : ""
                    }`}
               >
                    <ButtonX toggleMenu={toggleMenu} />
                    <nav className="flex grow items-center justify-center text-slate-300 uppercase font-condensed tracking-widest">
                         <ul className="flex flex-col space-y-5 w-36">
                              {menuItems.map((menuItem, index) => (
                                   <MenuItem
                                        key={index}
                                        label={menuItem.label}
                                        linkTo={menuItem.linkTo}
                                        toggleMenu={toggleMenu}
                                   />
                              ))}
                         </ul>
                    </nav>
               </div>
          </>
     );
}

export default Menu;
