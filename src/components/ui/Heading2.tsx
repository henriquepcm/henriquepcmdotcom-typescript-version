import { HeadingProps } from "../../assets/types";

function Heading2({ children, isHome }: HeadingProps): JSX.Element {
     return (
          <h2
               id="tagline"
               className={`${
                    isHome
                         ? "text-3xl leading-tight text-neutral-500"
                         : "mt-5 font-bold"
               }`}
          >
               {children}
          </h2>
     );
}

export default Heading2;
