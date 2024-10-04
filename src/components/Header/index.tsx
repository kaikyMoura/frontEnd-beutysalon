import { usePageContext } from '@/context/PageContexts';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

const Header = () => {
    const { currentPage, setCurrentPage, setPageTitle } = usePageContext();

    const pages = [{ name: 'Início', link: '/home' }, { name: 'Sobre', link: '/about' }, { name: 'Serviços', link: '/services' }, { name: 'Depoimentos', link: '/depoiments' }, { name: 'Contato', link: '/contact' }];

    const handlePageChange = (index: number, name: string) => {
        setCurrentPage(index)
        setPageTitle(name)
    }

    return (
        <div className={styles.headerContainer}>
            <div className={`flex justify-between ${styles.header}`}>
                <div className='ml-12'>
                    <Image className='ml-8' src={'/Logo.png'} alt={'logo'} width={165} height={25} />
                </div>
                <div>
                    <ul className='flex gap-8 mr-20'>
                        {pages.map((page, index) => (

                            <li key={index} style={{
                                borderBottom: currentPage === index ? '2px solid #69B99D' : 'none',
                            }}>
                                <Link href={page.link}>
                                    <p className='font-medium text-base'
                                        onClick={() => handlePageChange(index, page.name)}
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