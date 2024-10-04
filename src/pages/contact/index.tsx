import Button from "@/components/Button/button";
import MailIcon from "@/components/icons/Mail";
import MapPinIcon from "@/components/icons/MapPin";
import PhoneIcon from "@/components/icons/Phone";
import WhatsappIcon from "@/components/icons/Whatsapp";
import styles from "./index.module.css";
import InstagramIcon from "@/components/icons/Instagram";
import FacebookIcon from "@/components/icons/Facebook";
import YoutubeIcon from "@/components/icons/Youtube";

const Contact = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className="relative left-32 mt-4">
                    <h2 className="font-bold text-4xl max-w-xs">Entre em contato com a gente!</h2>
                    <p className="font-normal text-lg  max-w-xs mt-4">Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
                    <Button icon={<WhatsappIcon className="relative" width="24px" height="24px" fill="#fff" />} className="mt-4" type={"primary"} text={"Entrar em contato"} />
                </div>
                <div className="relative flex flex-col gap-8 left-[480px]">
                    <div className="flex gap-3">
                        <PhoneIcon className="" width="24px" height="24px" fill="#fff" stroke="#69B99D" />
                        <p className="text-lg">11 99845-6754</p>
                    </div>
                    <div className="flex gap-3">
                        <MapPinIcon className="" width="24px" height="24px" fill="#69B99D" />
                        <p className="text-lg">R. Amauri Souza, 346</p>
                    </div>
                    <div className="flex gap-3">
                        <MailIcon className="" width="24px" height="24px" fill="#69B99D" />
                        <p className="text-lg">contato@beautysalon.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className="relative left-32 mt-4">
                    <div className="flex">
                        <h2 className="font-bold text-4xl max-w-xs"><span>beauty</span>salon</h2>
                        <li className="rounded-full self-end"></li>
                    </div>
                    <p className="font-normal text-base mt-6">©2021 Beautysalon.</p>
                    <p className="font-normal text-base mt-2">Todos os direitos reservados.</p>
                </div>
                <div className="relative left-[65%] justify-center">
                    <div className="flex w-full gap-8">
                        <InstagramIcon className="relative" width="24px" height="24px" fill="#fff" />
                        <FacebookIcon className="relative" width="24px" height="24px" fill="#fff" />
                        <YoutubeIcon className="relative" width="24px" height="24px" fill="#fff" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;