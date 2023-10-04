import { useState } from 'react';
import ReactVivus from '../ReactVivus/ReactVivus';
import GreenFace from './green-face.svg';
import Icon from '../Icons/Icons';
import './Hero.css';

function Hero() {
  const [animation, setAnimation] = useState(null);

  const handleResetAnimation = () => {
    if (animation) {
      animation.reset().play();
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-image">
        <ReactVivus
          replay={setAnimation}
          id="green-face"
          option={{
            file: GreenFace,
            duration: 200,
            animTimingFunction: 'EASE',
            type: 'oneByOne',
            onReady: console.log,
          }}
          callback={console.log}
        />
        <button type="button" onClick={handleResetAnimation} className="btn-reset">
          <Icon icon="reload" size={26} color="white" />
        </button>
      </div>
      <h1>
        Ludovic Fourteau <br />
        Développeur Fullstack JS
      </h1>
    </div>
  );
}

export default Hero;
