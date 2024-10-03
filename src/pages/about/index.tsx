import React from "react";
import styles from "./index.module.css"
import Image from "next/image";

const About = () => {

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
                <div className="relative top-8 w-[612px] h-[412px]">
                    <div className={`absolute inset-0 -top-8 ${styles.imgBackground}`} />
                    <Image className="relative z-50" src={"/about.png"} alt={"about"} width={617} height={412} />
                </div>
                <div className="relative z-50 ml-16 top-6 mr-4">
                    <h2 className="font-bold text-4xl">Sobre nós</h2>
                    <p className="text-start mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus.
                        <br />
                        <br />
                        In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed.
                        <br />
                        <br />
                        Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;