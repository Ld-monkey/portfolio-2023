import Icon from '../../Icons/Icons';
import './AsideMenu.css';

function AsideMenu({ toggled, toggle }) {
  return (
    <aside className={toggled ? 'is-active' : undefined}>
      <nav>
        <ul>
          <li>
            <a href="#hero-section" onClick={() => toggle(!toggled)}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#about-section" onClick={() => toggle(!toggled)}>
              &Agrave; propos
            </a>
          </li>
          <li>
            <a href="#projects-section" onClick={() => toggle(!toggled)}>
              Réalisations
            </a>
          </li>
          <li>
            <a href="#contact-setction" onClick={() => toggle(!toggled)}>
              Contact
            </a>
          </li>
          <div className="logo-container">
            <li>
              <a href="mailto:" onClick={() => toggle(!toggled)}>
                <Icon icon="mail" size={27} color="white" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ld-monkey"
                target="_blank"
                rel="noreferrer"
                onClick={() => toggle(!toggled)}
              >
                <Icon icon="github" size={26} color="white" />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </aside>
  );
}

export default AsideMenu;
