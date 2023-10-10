import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import ScrollingButton from '../ScrollingButton/ScrollingButton';
import profileImage from '/images/backgrounds/header-pink-blur.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-circle">
        <img src={profileImage} alt="top circle" />
      </div>
      <section id="hero-section">
        <Navbar />
        <div className="hero-grid">
          <Hero />
          <ScrollingButton />
        </div>
      </section>
      <section id="about-section">
        <div className="about-section-wrapper">
          <h3>&Agrave; Propros</h3>
          <div className="cards-wrapper">
            <Card>
              <p>
                Passionné par l’informatique, j’ai terminé mes études pour
                devenir ingénieur en bio-informatique.
              </p>
              <p>
                Après 3 ans, à programmer pour les entreprises, j’ai décidé
                d’élargir mes compétences dans le développement web en passant
                le titre professionnel.
              </p>
              <p>
                J’ai pu approfondir mes connaissances en HTML, CSS, JavaScript
                et React avec des projets réalisés seul ou à plusieurs.
              </p>
              <p>
                Par-dessus tout, j’aime apprendre de nouvelles choses et
                partager mes connaissances.
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
                    <a href="https://www.francecompetences.fr/recherche/rncp/31114/">
                      DWWM
                    </a>{' '}
                    <span>(sept. 2023)</span>
                  </li>
                  <li>
                    <a href="#">Master de Bio-Informatique </a>
                    <span>(avr. 2020)</span>
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
                    3 ans de travail dans les entreprises de la recherche
                    publiques
                  </li>
                </ul>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
