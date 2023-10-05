import Icon from '../../Icons/Icons';
import './AsideMenu.css';

function AsideMenu({ toggled }) {
  return (
    <aside className={toggled && 'is-active'}>
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
      </nav>
    </aside>
  );
}

export default AsideMenu;
