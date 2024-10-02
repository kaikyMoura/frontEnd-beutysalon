import { PageProvider } from "@/context/PageContexts";
import { AppProps } from "next/app";
import '../styles/globals.css';
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <PageProvider>
                <Component {...pageProps} />
            </PageProvider>
        </>
    )
}

export default App;