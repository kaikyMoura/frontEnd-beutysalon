import PageLayout from "@/components/PageLayout";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface PageContextProps {
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>
}

const PageContext = createContext<PageContextProps | undefined>(undefined)

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage }}>
            <PageLayout>
                {children}
            </PageLayout>
        </PageContext.Provider>
    );
}

export const usePageContext = () => {
    const context = React.useContext(PageContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};