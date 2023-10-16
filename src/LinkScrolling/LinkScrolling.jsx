import './LinkScrolling.css';

function LinkScrolling(props) {
  const { children, idElement, onClick } = props;

  const handleScrolling = (element) => {
    // Close aside menu.
    if (onClick) {
      onClick()
    }

    // Get element for scrolling.
    const el = document.getElementById(element);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      type="button"
      className="link-scroll"
      onClick={() => handleScrolling(idElement)}
    >
      {children && children}
    </button>
  );
}

export default LinkScrolling;
