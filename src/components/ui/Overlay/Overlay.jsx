import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './Overlay.module.scss';

const Overlay = ({ isMenuOpen, isClosing, onClose }) => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Contacts', path: '/contacts' },
    ];

    const handleLinkClick = () => {
        if (!isClosing) {
            onClose();
        }
    };

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(onClose, 500); 
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    return (
        <div className={`${s.overlay} ${isMenuOpen ? s.overlayOpen : ''} ${isClosing ? s.overlayClose : ''}`}>
            <div className={s.menu}>
                <div className={s.links}>
                    {links.map((link, index) => (
                        <Link
                            key={`${isMenuOpen ? 'open' : 'closed'}-${index}`}
                            to={link.path}
                            onClick={handleLinkClick} 
                        >
                            <span>{`0${index + 1}`}</span>
                            <i>{link.name}</i>
                        </Link>
                    ))}
                </div>
                <div className={s.socials}>
                    <Link target="blank"  to='https://t.me/Mahmudov_a14' onClick={handleLinkClick}>↗ telegram</Link>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
