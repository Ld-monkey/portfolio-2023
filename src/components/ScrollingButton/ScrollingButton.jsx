import Icon from '../Icons/Icons';
import './ScrollingButton.css';

function ScrollingButton() {
  return (
    <div className="scrolling-container">
      <Icon className="arrow-bottom" icon="arrow-bottom" size={18} />
      <a href="#about-section" className="scrolling-link">
        Scroller pour en savoir plus
      </a>
    </div>
  );
}

export default ScrollingButton;
