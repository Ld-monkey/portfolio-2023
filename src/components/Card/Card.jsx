import './Card.css';

function Card({ children }) {
  return (
    <div className="card-container">
      <div className="card-blur-circle top-background" />
      <div className="card-blur-circle bottom-background" />
      {children}
    </div>
  );
}

export default Card;
