import { HeadingProps } from "../../assets/types";

function Heading2({ children, isHome }: HeadingProps): JSX.Element {
     return (
          <h2
               id="tagline"
               className={`${
                    isHome
                         ? "text-3xl leading-tight text-neutral-500"
                         : "text-xl mt-10"
               }`}
          >
               {children}
          </h2>
     );
}

export default Heading2;
