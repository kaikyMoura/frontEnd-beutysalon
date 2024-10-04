import React, { ReactNode, useEffect } from "react";
import Header from "../Header/index";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { usePageContext } from "@/context/PageContexts";

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter()
    const { pageTitle } = usePageContext();

    useEffect(() => {
        console.log('Current pathname:', router.pathname);
        if (router.pathname === '/' || router.pathname === '/_error') {
            console.log('Redirecionando para /home');
            router.push('/home');
        }
    }, [router]);

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