import './TeaDetail.css';
import { useNavigate } from "react-router-dom";

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
        >
          ✕
        </button>

        <img
          src={selectedTea.image}
          alt={selectedTea.name}
          className="tea-detail-image"
        />

        <h2>{selectedTea.name}</h2>

        <p className="tea-description">
          {selectedTea.description}
        </p>

        <div className="detail-list">
          <p>🌡️ 적정 물 온도 : {selectedTea.temperature}°C</p>

          <p>⏳ 우림 시간 : {selectedTea.brewTime}초</p>

          <p>🍂 찻잎 양 : {selectedTea.leafAmount}</p>

          <p>🍃 맛 : {selectedTea.flavor}</p>

          <p>🌸 향 : {selectedTea.aroma}</p>

          <p>📦 보관 방법 : {selectedTea.storage}</p>
        </div>

        <button
          className="start-btn"
          onClick={() =>
            navigate(`/brewing/${selectedTea.id}`)
          }
        >
          학습 시작
        </button>
      </div>
    </div>
  );
}

export default TeaDetail;