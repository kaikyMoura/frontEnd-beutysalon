import styles from './home/index.module.css'
import Image from "next/image";
import Button from "@/components/Button/button";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <div className="relative left-32">
          <h2 className="font-bold text-4xl">Saúde natural para os seus cabelos</h2>
          <p className="font-normal text-lg mt-4">Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
          <Button className="mt-4" type={"primary"} text={"Agendar um horário"} />
        </div>
        <div className="relative left-56 top-6">
          <Image className="absolute z-50 top-12" src={"/salonImage.png"} alt={"randomWomen"} width={561} height={375} />
          <div className={`top-20 ml-20 ${styles.imgBackground}`} />
        </div>
      </div>
    </div>
  );
}

export default Home;