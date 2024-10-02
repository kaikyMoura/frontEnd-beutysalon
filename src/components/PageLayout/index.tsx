import React, { ReactNode } from "react";
import Header from "../Header/index";

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const { currentPage } = usePageContext();
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>
    )
}

export default PageLayout;