import { PageProvider } from "@/context/PageContexts";
import { AppProps } from "next/app";
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <PageProvider>
            <Component {...pageProps} />
        </PageProvider>
    )
}

export default App;