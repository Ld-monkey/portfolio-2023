import Icon from '../Icons/Icons';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact-section">
      <h3>Intéressé(e) par mon profil ?</h3>
      <button type="button" className="contact-section__btn">
        <a href="mailto:">Contactez-moi</a>
      </button>
      <div className="contact-section__icons">
        <ul>
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
              <Icon icon="mail" size={26} color="white" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
