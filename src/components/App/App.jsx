import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import ScrollingButton from '../ScrollingButton/ScrollingButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-circle">
        <img src="/images/backgrounds/header-pink-blur.svg" alt="top circle" />
      </div>
      <section id="hero-section">
        <Navbar />
        <div className="hero-grid">
          <Hero />
          <ScrollingButton />
        </div>
      </section>
      <section id="about-section">
        <h3>&Agrave; Propros</h3>
        <Card />
      </section>
    </div>
  );
}

export default App;
