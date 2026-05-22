import { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { ButtonCta } from '../../ui'
import styles from './Header.module.scss';

export const Header = ({ toWhatsApp }) => {


    const NAV_LINKS = [
        { label: 'Inicio', href: '#' },
        { label: 'Sobre mí', href: '#link', },
        { label: 'Terapia', href: '#link2', },
        { label: 'Consulta', href: '#link3', },
    ]

    const CTA = {
        text: 'Primera consulta',
        toWhatsApp: toWhatsApp
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const BurgerIcon = isOpen ? BsX : BsList;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 900) {
                // cambiar el tamaño del maxwidth del header
                setIsOpen(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* LOGO_COMPONENT */}
                <a href={'#'} className={styles.logo} onClick={() => setIsOpen(false)}>
                    {/* img si aplica */}
                    Dra. Laura <span className={styles.span}>Martínez</span>
                </a>


                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href} className={styles.link} onClick={() => setIsOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                    <div className={styles.ctaMobile}>
                        <ButtonCta size='sm' icon={'cta'} text={CTA.text} href={CTA.toWhatsApp} />
                    </div>
                </nav>

                <div className={styles.cta}>
                    <ButtonCta size='sm' icon={'cta'} text={CTA.text} href={CTA.toWhatsApp} />
                </div>

                <button
                    className={styles.burger}
                    onClick={toggleMenu}
                    aria-label='Menu'
                >
                    <BurgerIcon className={styles.icon} />
                </button>
            </div>
        </header>
    );
};
