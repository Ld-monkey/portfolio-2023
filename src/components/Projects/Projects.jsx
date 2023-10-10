import previewProject1 from '/images/projects/o+offrant.png';
import Icon from '../Icons/Icons';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section wrapper" id="projects-section">
      <h3>Mes Réalisations</h3>
      <div className="project-container">
        <a
          href="https://o-plus-offrant-front-end-production.up.railway.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={previewProject1}
            alt="project to DWWM O plus Offrant"
            className="project-img"
          />
        </a>
        <div className="project-content">
          <h4>O + Offrant</h4>
          <p>
            Simulateur de vente aux enchères réalisé sur 1 mois en collaboration
            avec 4 développeurs lors de ma formation avec O’clock.
          </p>
          <div className="references-container">
            <ul>
              <li>
                <p>Front end</p>
                <a
                  href="https://github.com/Ld-monkey/o-plus-offrant-front-end"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="github" size={24} color="white" />
                </a>
              </li>
              <li>
                <p>Back end</p>
                <a
                  href="https://github.com/Ld-monkey/o-plus-offrant-back-end"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon icon="github" size={24} color="white" />
                </a>
              </li>
            </ul>
          </div>
          <div className="technologies-container">
            <p>Technologies</p>
            <ul>
              <li>
                <a href="#">
                  <Icon icon="react" size={32} color="white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
