import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import ScrollingButton from '../ScrollingButton/ScrollingButton';
import './Home.css';

function Home() {
  return (
    <>
      <div className="header-top-circle wrapper" />
      <section className="hero-section wrapper" id="hero-section">
        <Navbar />
        <div className="hero-grid">
          <Hero />
          <ScrollingButton />
        </div>
      </section>
    </>
  );
}

export default Home;
