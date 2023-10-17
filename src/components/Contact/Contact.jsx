import Icon from '../Icons/Icons';
import Mail from '../Mail/Mail';
import './Contact.css';

function Contact() {
  return (
    <div className="wrapper">
      <section className="contact-section" id="contact-section">
        <h3>Intéressé(e) par mon profil ?</h3>
        <button type="button" className="contact-section__btn">
          <Mail>Contactez-moi</Mail>
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
              <Mail />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Contact;
