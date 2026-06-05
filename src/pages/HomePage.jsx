import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import './HomePage.css';
import Sidebar from "../components/Sidebar.jsx";
import TeaCard from "../components/TeaCard.jsx";
import TeaDetail from "../components/TeaDetail.jsx";
import { teaList } from "../data/teaData.js";

function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedTea, setSelectedTea] = useState(null);

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const filteredTea = teaList.filter((tea) =>
    tea.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      <div className="layout">
        <Sidebar />

        <div className="content">

          <div className="top-bar">
            <h2>
              🍃 {currentUser.name}님, 오늘은 어떤 차를 배우실 건가요?
            </h2>

            <button
              className="logout-btn"
              onClick={logout}
            >
              로그아웃
            </button>
          </div>

          <input
            className="search-bar"
            type="text"
            placeholder="차 검색..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <div className="tea-grid">
              {filteredTea.map((tea) => (
                <div
                  key={tea.id}
                  onClick={() => setSelectedTea(tea)}
                >
                  <TeaCard tea={tea} />
                </div>
              ))}
            </div>

            {selectedTea && (
              <TeaDetail
                selectedTea={selectedTea}
                onClose={() => setSelectedTea(null)}
              />
            )}

        </div>
      </div>
    </>
  );
}

export default HomePage;