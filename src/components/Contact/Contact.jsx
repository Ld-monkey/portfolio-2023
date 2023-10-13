import Icon from '../Icons/Icons';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact-section">
      <h4>Intéressé(e) par mon profil ?</h4>
      <button type="button" className="contact-section__btn">
        Contactez-moi
      </button>
      <div className="contact-section__icons">
        <li>
          <a
            href="https://github.com/Ld-monkey"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="github" size={26} color="white" />
          </a>
        </li>
        <li>
          <a href="mailto:">
            <Icon icon="mail" size={27} color="white" />
          </a>
        </li>
      </div>
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
    </section>
  );
}

export default Contact;
