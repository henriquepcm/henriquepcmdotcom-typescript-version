import { PageMainContentProps } from "../../assets/types";

function PageMainContent({
     children,
     containerWrapper,
     container,
}: PageMainContentProps): JSX.Element {
     return (
          <main className={containerWrapper}>
               <div className={container}>{children}</div>
          </main>
     );
}

export default PageMainContent;
