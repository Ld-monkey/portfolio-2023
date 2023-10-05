import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import ScrollingButton from '../ScrollingButton/ScrollingButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="hero-section">
        <Navbar />
        <Hero />
        <ScrollingButton />
      </section>
    </div>
  );
}

export default App;
