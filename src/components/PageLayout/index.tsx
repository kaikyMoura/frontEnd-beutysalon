// import { useLoadingContext } from "@/context/LoadingContext";
import { useLoadingContext } from "@/context/LoadingContext";
import { usePageContext } from "@/context/PageContext";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import Header from "../Header/index";

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter()
    const { pageTitle } = usePageContext();

    const { setLoading } = useLoadingContext();

    useEffect(() => {
        const timer = setTimeout(() => {

            if (setLoading) {
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
            }
        }, 0);

        return () => clearTimeout(timer);
    }, [router, router.events, setLoading]);

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