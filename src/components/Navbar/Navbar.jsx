import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Icon from '../Icons/Icons';
import './Navbar.css';
import AsideMenu from './AsideMenu/AsideMenu';
import Mail from '../Mail/Mail';
import LinkScrolling from '../../LinkScrolling/LinkScrolling';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <LinkScrolling idElement="#hero-section">
                <p>Accueil</p>
              </LinkScrolling>
            </li>
            <li>
              <LinkScrolling idElement="about-section">
                <p>&Agrave; propos</p>
              </LinkScrolling>
            </li>
            <li>
              <LinkScrolling idElement="projects-section">
                <p>Réalisations</p>
              </LinkScrolling>
            </li>
            <li>
              <LinkScrolling idElement="contact-section">
                <p>Contact</p>
              </LinkScrolling>
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
