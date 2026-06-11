import './TeaCard.css';
import Icon from './Icon.jsx';

function TeaCard({ tea }) {
  return (
    <div className="tea-card">
      <img
        src={tea.image}
        alt={tea.name}
        className="tea-image"
      />

      <h3>{tea.name}</h3>

      <p className="tea-description">
        {tea.shortDescription}
      </p>

      <p><Icon name="leaf" className="inline-icon" />{tea.flavor}</p>
    </div>
  );
}

export default TeaCard;
