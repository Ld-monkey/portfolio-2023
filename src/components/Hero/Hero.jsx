import ReactVivus from 'react-vivus';
import GreenFace from './green-face.svg';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <ReactVivus
          id="green-face"
          option={{
            file: GreenFace,
            duration: 150,
            animTimingFunction: 'EASE',
            type: 'oneByOne',
            onReady: console.log,
          }}
          callback={console.log}
        />
      </div>
      <h1>
        Ludovic Fourteau <br />
        Développeur Fullstack JS
      </h1>
    </div>
  );
}

export default Hero;
