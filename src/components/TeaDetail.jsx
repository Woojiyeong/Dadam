import './TeaDetail.css';
import { useNavigate } from "react-router-dom";
import Icon from './Icon.jsx';

const detailItems = [
  { key: "temperature", icon: "thermometer", label: "물 온도", suffix: "°C" },
  { key: "brewTime", icon: "hourglass", label: "우림 시간", suffix: "초" },
  { key: "leafAmount", icon: "scale", label: "찻잎 양" },
  { key: "flavor", icon: "diamond", label: "맛" },
  { key: "aroma", icon: "sparkle", label: "향" },
  { key: "storage", icon: "archive", label: "보관" },
];

function TeaDetail({ selectedTea, onClose }) {
  const navigate = useNavigate();

  if (!selectedTea) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="tea-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="차 상세 닫기"
        >
          <Icon name="x" />
        </button>

        <div className="tea-detail-hero">
          <img
            src={selectedTea.image}
            alt={selectedTea.name}
            className="tea-detail-image"
          />

          <div className="tea-detail-hero-text">
            <span className="tea-detail-badge">Tea Profile</span>
            <h2>{selectedTea.name}</h2>
            <p>{selectedTea.shortDescription}</p>
          </div>
        </div>

        <p className="tea-description">
          {selectedTea.description}
        </p>

        <div className="detail-list">
          {detailItems.map((item) => (
            <div className="detail-item" key={item.key}>
              <span className="detail-item-icon">
                <Icon name={item.icon} />
              </span>
              <span className="detail-item-label">{item.label}</span>
              <strong>
                {selectedTea[item.key]}
                {item.suffix ?? ""}
              </strong>
            </div>
          ))}
        </div>

        <div className="tea-modal-actions">
          <button
            className="start-btn"
            onClick={() =>
              navigate(`/brewing/${selectedTea.id}`)
            }
          >
            우리는 과정 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeaDetail;
