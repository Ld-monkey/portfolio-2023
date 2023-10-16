import LinkScrolling from '../../LinkScrolling/LinkScrolling';
import Icon from '../Icons/Icons';
import './ScrollingButton.css';

function ScrollingButton() {
  return (
    <LinkScrolling idElement="about-section">
      <div className="scrolling-container">
        <Icon className="arrow-bottom" icon="arrow-bottom" size={18} />
        <p className="link-scroll small-linker">
          Scroller pour en savoir plus
        </p>
      </div>
    </LinkScrolling>
  );
}

export default ScrollingButton;
