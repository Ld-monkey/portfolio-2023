import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import ScrollingButton from '../ScrollingButton/ScrollingButton';
import './App.css';

function App() {
  return (
    <main>
      <section className="hero-section">
        <Navbar />
        <Hero />
        <ScrollingButton />
      </section>
    </main>
  );
}

export default App;
