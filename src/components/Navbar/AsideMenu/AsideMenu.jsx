import Icon from '../../Icons/Icons';
import Mail from '../../Mail/Mail';
import LinkScrolling from '../../../LinkScrolling/LinkScrolling';
import './AsideMenu.css';

function AsideMenu({ toggled, toggle }) {
  return (
    <aside className={toggled ? 'is-active' : undefined}>
      <nav>
        <ul>
          <li>
            <LinkScrolling
              idElement="#hero-section"
              onClick={() => toggle(!toggled)}
            >
              <p>Accueil</p>
            </LinkScrolling>
          </li>
          <li>
            <LinkScrolling
              idElement="about-section"
              onClick={() => toggle(!toggled)}
            >
              <p>&Agrave; propos</p>
            </LinkScrolling>
          </li>
          <li>
            <LinkScrolling
              idElement="projects-section"
              onClick={() => toggle(!toggled)}
            >
              <p>Réalisations</p>
            </LinkScrolling>
          </li>
          <li>
            <LinkScrolling
              idElement="contact-section"
              onClick={() => toggle(!toggled)}
            >
              <p>Contact</p>
            </LinkScrolling>
          </li>
          <div className="logo-container">
            <li>
              <Mail />
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
