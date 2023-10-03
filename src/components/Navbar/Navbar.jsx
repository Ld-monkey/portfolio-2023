import Icon from '../Icons/Icons';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">&Agrave; propos</a>
          </li>
          <li>
            <a href="#">Réalisations</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">
              <Icon icon="mail" size={27} color="white" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="github" size={26} color="white" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
