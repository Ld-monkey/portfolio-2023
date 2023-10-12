import Card from '../Card/Card';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-section" id="about-section">
      <div className="circle-blur first" />
      <div className="circle-blur second" />
      <h3>&Agrave; Propros</h3>
      <div className="cards-wrapper">
        <Card>
          <p>
            Passionné par l’informatique, j’ai terminé mes études pour devenir
            ingénieur en bio-informatique.
          </p>
          <p>
            Après 3 ans, à programmer pour les entreprises, j’ai décidé
            d’élargir mes compétences dans le développement web en passant le
            titre professionnel.
          </p>
          <p>
            J’ai pu approfondir mes connaissances en HTML, CSS, JavaScript et
            React avec des projets réalisés seul ou à plusieurs.
          </p>
          <p>
            Par-dessus tout, j’aime apprendre de nouvelles choses et partager
            mes connaissances.
          </p>
        </Card>
        <Card>
          <ul className="list-about-me">
            <li className="list-icon diploma">
              <h4>Diplômes</h4>
            </li>
            <ul>
              <li>
                Titre Professionnel{' '}
                <a
                  href="https://www.francecompetences.fr/recherche/rncp/31114/"
                  target="_blank"
                  rel="noreferrer"
                >
                  DWWM
                </a>{' '}
                <span className="period">(sept. 2023)</span>
              </li>
              <li>
                <a
                  href="https://odf.u-paris.fr/fr/offre-de-formation/master-XB/sciences-technologies-sante-STS/bio-informatique-K2VO60MU/master-bioinformatique-parcours-biologie-informatique-IJTUMHHO.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Master de Bio-Informatique{' '}
                </a>{' '}
                <span className="period">(avr. 2020)</span>
              </li>
            </ul>
          </ul>
          <ul className="list-about-me">
            <li className="list-icon experience">
              <h4>Expériences</h4>
            </li>
            <ul>
              <li>5 ans d&apos;expériences dans la programmation</li>
              <li>
                3 ans de travail dans les entreprises de la recherche publiques
              </li>
            </ul>
          </ul>
        </Card>
      </div>
    </section>
  );
}

export default AboutMe;
