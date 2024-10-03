import { usePageContext } from '@/context/PageContexts';
import Image from 'next/image';
import styles from './index.module.css';
import Link from 'next/link';

const Header = () => {
    const { currentPage, setCurrentPage } = usePageContext();

    const pages = [{ name: 'Início', link: '/Home' }, { name: 'Sobre', link: '/Home' }, { name: 'Serviços', link: '/Home' }, { name: 'Depoimentos', link: '/Home' }, { name: 'Contato', link: '/Home' }];

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
                                <Link href={page.link}>
                                    <p className='font-medium text-base'
                                        onClick={() => setCurrentPage(index)}
                                        style={{
                                            color: currentPage === index ? '#69B99D' : 'black',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {page.name}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;