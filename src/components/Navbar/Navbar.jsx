import { useState } from 'react';
import Hamburger from 'hamburger-react';
import Icon from '../Icons/Icons';
import './Navbar.css';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
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
            <a href="#contact-setction">Contact</a>
          </li>
          <li>
            <a href="mailto:">
              <Icon icon="mail" size={27} color="white" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Ld-monkey">
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
  );
}

export default Navbar;
