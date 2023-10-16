import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Icon from '../Icons/Icons';
import './Navbar.css';
import AsideMenu from './AsideMenu/AsideMenu';
import Mail from '../Mail/Mail';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#hero-section">Accueil</a>
            </li>
            <li>
              <a href="#about-section">&Agrave; propos</a>
            </li>
            <li>
              <a href="#projects-section">Réalisations</a>
            </li>
            <li>
              <a href="#contact-section">Contact</a>
            </li>
            <li>
              <Mail />
            </li>
            <li>
              <a
                href="https://github.com/Ld-monkey"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="github" size={26} color="white" />
              </a>
            </li>
          </ul>
          <div className="hamburger-container">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={24}
              label="Show menu"
            />
          </div>
        </nav>
      </header>
      <AsideMenu toggled={isOpen} toggle={setOpen} />
    </>
  );
}

export default Navbar;
