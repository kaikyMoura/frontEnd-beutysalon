import { LoadingProvider } from "@/context/LoadingContext";
import { PageProvider } from "@/context/PageContext";
import { AppProps } from "next/app";
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {

    return (
        <LoadingProvider>
            <PageProvider>
                <Component {...pageProps} />
            </PageProvider>
        </LoadingProvider>
    )
}

export default App;