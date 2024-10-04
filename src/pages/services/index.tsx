import CosmeticIcon from "@/components/icons/Cosmetic";
import WomanHairIcon from "@/components/icons/WomanHair";
import styles from "./index.module.css";
import ScissorICon from "@/components/icons/Scissor";

const Services = () => {

    return (
        <div className={styles.servicesContainer}>
            <div className={styles.servicesContent}>
                <div className="">
                    <div className="mt-20 flex justify-center">
                        <div>
                            <h2 className="font-bold text-4xl text-center">Serviços</h2>
                            <p className="max-w-lg text-center mt-4">Com mais de 10 anos no mercado, o <span style={{ color: "#69B99D"}}>Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>
                        </div>
                    </div>
                    <div className="flex gap-8 mt-16">
                        <div className={`${styles.card} flex flex-col items-start`}>
                            <WomanHairIcon className="relative" width="80px" height="80px" fill="#69B99D" />
                            <h3 className="font-bold text-2xl mt-4">Terapia capilar</h3>
                            <p className="font-normal text-base mt-4">Terapia completa para couro cabeludo e fios, protegendo todos os
                                tipos de cabelos, inclusive os longos e finos.</p>
                        </div>
                        <div className={`${styles.card} flex flex-col items-start`}>
                            <ScissorICon width="80px" height="80px" fill="#69B99D" />
                            <h3 className="font-bold text-2xl mt-4">Cortes</h3>
                            <p className="font-normal text-base mt-4">A nossa equipe é repleta de profissionais renomados,
                                famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
                        </div>
                        <div className={`${styles.card} flex flex-col items-start`}>
                            <CosmeticIcon width="80px" height="80px" fill="#69B99D" />
                            <h3 className="font-bold text-2xl mt-4">Tratamentos</h3>
                            <p className="font-normal text-base mt-4 text-center">O beautysalon conta com diversos tratamentos naturais
                                e totalmente veganos, para qualquer tipo de cabelo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;