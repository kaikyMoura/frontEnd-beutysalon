// import { useLoadingContext } from "@/context/LoadingContext";
import { usePageContext } from "@/context/PageContexts";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import Header from "../Header/index";
import { useLoadingContext } from "@/context/LoadingContext";

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter()
    const { pageTitle, setPageTitle } = usePageContext();
    const { setLoading } = useLoadingContext()

    useEffect(() => {
        // Basicamente estou controlando globalmente os loadings da aplicação
        // https://nextjs.org/docs/pages/api-reference/functions/use-router#routerevents
        const handleRouteChange = () => {
            setLoading(true);
        };

        const handleRouteComplete = () => {
            setLoading(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', handleRouteComplete);
        router.events.on('routeChangeError', handleRouteComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
            router.events.off('routeChangeComplete', handleRouteComplete);
            router.events.off('routeChangeError', handleRouteComplete);
        };
    }, [router, router.events, setLoading, setPageTitle]);

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
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default PageLayout;