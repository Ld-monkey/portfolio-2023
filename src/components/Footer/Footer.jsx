import Icon from '../Icons/Icons';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>Portfolio designé avec figma et codé avec le framework React.</p>
      <p>
        Code disponible{' '}
        <a
          href="https://github.com/Ld-monkey/portfolio-2023"
          target="_blank"
          rel="noreferrer"
        >
          ici <Icon icon="github" size={12} color="white" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
