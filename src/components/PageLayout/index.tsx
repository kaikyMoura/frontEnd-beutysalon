// import { useLoadingContext } from "@/context/LoadingContext";
import { LoadingProvider } from "@/context/LoadingContext";
import { usePageContext } from "@/context/PageContext";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import Header from "../Header/index";

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter()
    const { pageTitle, setPageTitle } = usePageContext();

    // const { setLoading } = useLoadingContext()

    useEffect(() => {
        if (router.pathname !== '/home' && router.pathname === '/' || router.pathname === '/_error') {
            router.replace('/home');
            setPageTitle('Início')
        }
    }, [router, router.pathname, setPageTitle]);

    return (
        <>
            <Head>
                <link rel='icon' href='/headIcon.ico' sizes="256x256" type="image/x-icon" />
                <title>{pageTitle}</title>
            </Head>
            <Header />
            {/* Adiciona animação de transição ao mudar de página */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={router.pathname}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                >

                    <LoadingProvider>
                        {children}
                    </LoadingProvider>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default PageLayout;