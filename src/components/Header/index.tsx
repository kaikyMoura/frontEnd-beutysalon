import Image from 'next/image';
import styles from './index.module.css'
import { usePageContext } from '@/context/PageContexts';

const Header = () => {
    const { currentPage, setCurrentPage } = usePageContext();

    const pages = ['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Contato'];

    return (
        <div className={styles.headerContainer}>
            <div className={`flex justify-between ${styles.header}`}>
                <div className='ml-12'>
                    <Image className='ml-8' src={'/Logo.jpg'} alt={'logo'} width={165} height={25} />
                </div>
                <div>
                    <ul className='flex gap-8 mr-20'>
                        {pages.map((page, index) => (
                            <li key={index} style={{
                                borderBottom: currentPage === index ? '2px solid #69B99D' : 'none',
                            }}>
                                <p className='font-medium text-base'
                                    onClick={() => setCurrentPage(index)}
                                    style={{
                                        color: currentPage === index ? '#69B99D' : 'black',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {page}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;