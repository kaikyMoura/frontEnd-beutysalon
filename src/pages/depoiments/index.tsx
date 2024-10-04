import CardList from "@/components/CardList";
import QuotsMarksIcon from "@/components/icons/Quots";
import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";

const Depoiments = () => {

    const [currentPage, setCurrentPage] = useState(Number)

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className="flex flex-col mt-6">
                    <div className="flex justify-center">
                        <h2 className="font-bold text-4xl max-w-md text-center">Depoimentos de quem já passou por aqui</h2>
                    </div>
                    <CardList pages={3} currentPage={currentPage} onPageChange={handlePageChange}>

                        <div className="flex gap-8">
                            <div className={`${styles.card} flex flex-col items-start`}>
                                <p className="flex max-w-md text-start gap-1">
                                    <QuotsMarksIcon className="absolute" width="20px" height="26px" fill="#69B99D" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.
                                </p>
                                <div className="flex w-full relative left-12 gap-2 mt-4">
                                    <Image className={styles.avatar} src={"/avatar.png"} alt={"randomWomen"} width={32} height={32} />
                                    <p className="flex items-center" style={{ color: "#767676" }}>Wanessa Souza</p>
                                </div>
                            </div>
                            <div className={`${styles.card} flex flex-col items-start`}>
                                <p className="flex max-w-md text-start gap-1">
                                    <QuotsMarksIcon className="absolute" width="20px" height="26px" fill="#69B99D" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.
                                </p>
                                <div className="flex gap-2 w-full relative left-12 mt-4">
                                    <Image className={styles.avatar} src={"/avatar2.png"} alt={"randomWomen"} width={32} height={32} />
                                    <p className="flex items-center" style={{ color: "#767676" }}>Luna Falcão</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div className={`${styles.card} flex flex-col items-start`}>
                                <p className="flex max-w-md text-start gap-1">
                                    <QuotsMarksIcon className="absolute" width="20px" height="26px" fill="#69B99D" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sou cliente deste salão há anos e não consigo imaginar ir a outro lugar! Meu cabelo nunca esteve tão saudável desde que comecei a usar os produtos naturais e veganos que eles recomendam. A equipe é super profissional e sempre me faz sentir especial a cada visita.
                                </p>
                                <div className="flex gap-2 w-full relative left-12 mt-4">
                                    <Image className={styles.avatar} src={"/perfil3.png"} alt={"randomWomen"} width={600} height={1000} />
                                    <p className="flex items-center" style={{ color: "#767676" }}>Mariana Silva</p>
                                    {/* Imagem de <a href="https://br.freepik.com/fotos-gratis/retrato-de-meio-envelheceu-executiva_4783012.htm">Freepik</a> */}
                                </div>
                            </div>
                            <div className={`${styles.card} flex flex-col items-start`}>
                                <p className="flex max-w-md text-start gap-1">
                                    <QuotsMarksIcon className="absolute" width="20px" height="26px" fill="#69B99D" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Já faz 3 anos que sou cliente deste salão e não poderia estar mais satisfeita! Os tratamentos são maravilhosos e meus cabelos nunca estiveram tão bonitos e bem cuidados. Os produtos naturais e veganos fazem toda a diferença, e os profissionais são sempre atenciosos e muito competentes.
                                </p>
                                <div className="flex gap-2 w-full relative left-12 mt-4">
                                    <Image className={styles.avatar} src={"/perfil4.png"} alt={"randomWomen"} width={32} height={32} />
                                    <p className="flex items-center" style={{ color: "#767676" }}>Ana Costa</p>
                                    {/* <a href="https://br.freepik.com/fotos-gratis/retrato-de-um-jovem-executiva-segurando-oculos-em-mao-contra-cinzento-fundo_3717378.htm#fromView=search&page=1&position=52&uuid=fd5b98a6-6301-4db5-90f6-ed65dd3f660e">Imagem de freepik</a> */}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={`${styles.card} flex flex-col items-start`}>
                                <p className="flex max-w-md text-start gap-1">
                                    <QuotsMarksIcon className="absolute" width="20px" height="26px" fill="#69B99D" />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Este salão transformou completamente meus cabelos! Sempre tive dificuldade em encontrar produtos que realmente cuidassem dos meus fios, mas aqui tudo mudou. Os tratamentos naturais e veganos deixaram meu cabelo macio, brilhante e muito mais saudável.
                                </p>
                                <div className="flex gap-2 w-full relative left-12 mt-4">
                                    <Image className={styles.avatar} src={"/perfil5.png"} alt={"randomWomen"} width={32} height={32} />
                                    {/* Imagem de <a href="https://br.freepik.com/fotos-gratis/mulher-romantica-com-flor-ramos_4284724.htm">Freepik</a> */}
                                    <p className="flex items-center" style={{ color: "#767676" }}>Camila Mendez</p>
                                </div>
                            </div>
                        </div>

                    </CardList>
                </div>
            </div>
        </div >
    )
}

export default Depoiments;