import { motion } from "framer-motion";
import styles from "./index.module.css"

interface CardListProps {
    children: React.ReactNode[]
    action?: string
    pages: number;
    currentPage: number | 0;
    onPageChange: (page: number) => void | unknown;
}

// Lida com a lógica de páginas da seção de depoimentos
const CardList = ({ ...props }: CardListProps) => {

    //Variantes da animação de 'slide' dos cards
    //https://www.framer.com/motion/animate-presence/
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }),
    };

    return (
        <div className="mt-20">
            <motion.div
                key={props.currentPage}
                custom={props.currentPage}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                }}
            >
                {props.children[props.currentPage]}
            </motion.div>
            <ul className="flex justify-center gap-2 mt-12">
                {Array.from({ length: props.pages }).map((_, index) => (
                    <li
                        key={index}
                        className={`${styles.dot}`}
                        onClick={() => props.onPageChange(index++)}
                        style={{ backgroundColor: `${props.currentPage === index ? '#69B99D' : '#E4E4E4'}` }}> {/* Altera a cor do ponto de acordo com a página */}
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default CardList;