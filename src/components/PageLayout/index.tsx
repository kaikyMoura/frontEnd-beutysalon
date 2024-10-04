import React, { ReactNode } from "react";
import Header from "../Header/index";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const PageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const router = useRouter()

    return (
        <>
            <Head>
                <link rel='icon' href='/Logo.png' />
                <title>{router.pathname}</title>
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