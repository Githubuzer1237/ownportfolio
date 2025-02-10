import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';
import { LuSunMedium } from 'react-icons/lu';
import { WiAlien } from 'react-icons/wi';
import Background3D from '../../ui/Background3D/Background3D';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Overlay from '../../ui/Overlay/Overlay';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [isMenuOpen]);


  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleClose = () => {
    setIsMenuOpen(false);
    setIsClosing(false);
  };

  return (
    <>
      <Background3D />
      <div className="noise"></div>

      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <Link to='/'>
              <div className={s.logo}>
                <WiAlien />
              </div>
            </Link>

            <div className={s.r_part}>
              <button className={s.theme}>
                <LuSunMedium />
              </button>
              <button className={`${s.burger} ${isMenuOpen ? s.active : ''}`} onClick={toggleMenu}>
                <BsGrid3X3Gap />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <Overlay
        isMenuOpen={isMenuOpen}
        isClosing={isClosing}
        onClose={handleClose}
      />
    </>
  );
};

export default Header;
