import { useState } from 'react';
import teaList from '../data/teaList';
import './TeaStorage.css';
import Sidebar from './Sidebar';
import Icon from './Icon.jsx';

const AVOID_ICONS = {
  "직사광선": "sun",
  "습기": "droplet",
  "강한 냄새 근처": "odor",
  "강한 냄새": "odor",
  "냄새가 강한 물질 근처": "odor",
  "온도 변화가 큰 곳": "thermometer",
  "높은 온도": "thermometer",
  "고온": "thermometer",
  "냉장 보관": "snowflake",
  "냉장·냉동": "snowflake",
  "밀폐 용기": "lock",
  "과도한 건조": "dry",
  "결로": "droplet",
};

const EMOJI_CONTAINER_ICONS = new Set(["🫙", "🥫", "📦", "📄"]);

export default function TeaStorage() {
  const [selectedId, setSelectedId] = useState(teaList[0].id);
  const [openSection, setOpenSection] = useState('steps');
  const tea = teaList.find((t) => t.id === selectedId);
  const s = tea.storage;

  function toggleSection(name) {
    setOpenSection((prev) => (prev === name ? null : name));
  }

  return (
    <>
      <div className="layout">
        <Sidebar />

        <div className="content">
          <div className="tea-storage">
            <h2 className="storage-title">찻잎 보관 방법</h2>
            <p className="storage-subtitle">올바른 보관으로 차의 향과 맛을 오래 유지하세요</p>

            {/* 차 선택 탭 */}
            <div className="tea-tabs">
              {teaList.map((t) => (
                <button
                  key={t.id}
                  className={`tea-tab ${tea.id === t.id ? 'active' : ''}`}
                  onClick={() => { setSelectedId(t.id); setOpenSection('steps'); }}
                >
                  {t.name}
                </button>
              ))}
            </div>

            {/* 헤더 카드 */}
            <div className="storage-header-card">
              <div className="tea-dot" style={{ background: tea.color }} />
              <div className="header-info">
                <h3 className="tea-name">{tea.name}</h3>
                <span className="tea-name-en">{tea.nameEn}</span>
                <p className="storage-summary-text">{s.summary}</p>
              </div>
              <div className="container-badge">
                <span className="container-icon">
                  {EMOJI_CONTAINER_ICONS.has(s.container.icon) ? (
                    s.container.icon
                  ) : (
                    <Icon name="cup" />
                  )}
                </span>
                <span className="container-name">{s.container.name}</span>
              </div>
            </div>

            {/* 환경 정보 */}
            <div className="env-row">
              <div className="env-item">
                <Icon name="thermometer" className="env-icon" />
                <span className="env-label">보관 온도</span>
                <span className="env-value">{s.temperature}</span>
              </div>
              <div className="env-divider" />
              <div className="env-item">
                <Icon name="droplet" className="env-icon" />
                <span className="env-label">권장 습도</span>
                <span className="env-value">{s.humidity}</span>
              </div>
              <div className="env-divider" />
              <div className="env-item">
                <Icon name="calendar" className="env-icon" />
                <span className="env-label">개봉 후</span>
                <span className="env-value">{s.period.after}</span>
              </div>
            </div>

            {/* 개봉 전/후 */}
            <div className="open-compare">
              <div className="open-box">
                <span className="open-label"><Icon name="lock" className="inline-icon" />개봉 전</span>
                <p>{s.beforeOpen}</p>
              </div>
              <div className="open-arrow">→</div>
              <div className="open-box open-box--after">
                <span className="open-label"><Icon name="inbox" className="inline-icon" />개봉 후</span>
                <p>{s.afterOpen}</p>
              </div>
            </div>

            {/* 아코디언 섹션 */}
            <div className="accordion">

              {/* 단계별 보관 방법 */}
              <div className="accordion-item">
                <button
                  className={`accordion-header ${openSection === 'steps' ? 'open' : ''}`}
                  onClick={() => toggleSection('steps')}
                >
                  <span><Icon name="list" className="inline-icon" />단계별 보관 방법</span>
                  <span className="accordion-arrow">{openSection === 'steps' ? '▲' : '▼'}</span>
                </button>
                {openSection === 'steps' && (
                  <div className="accordion-body">
                    <ol className="steps-list">
                      {s.steps.map((step, i) => (
                        <li key={i} className="step-item">
                          <span className="step-num">{i + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {/* 보관 팁 */}
              <div className="accordion-item">
                <button
                  className={`accordion-header ${openSection === 'tips' ? 'open' : ''}`}
                  onClick={() => toggleSection('tips')}
                >
                  <span><Icon name="lightbulb" className="inline-icon" />알아두면 좋은 팁</span>
                  <span className="accordion-arrow">{openSection === 'tips' ? '▲' : '▼'}</span>
                </button>
                {openSection === 'tips' && (
                  <div className="accordion-body">
                    <ul className="tips-list">
                      {s.tips.map((tip, i) => (
                        <li key={i} className="tip-item">
                          <span className="tip-dot" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* 피해야 할 것 */}
              <div className="accordion-item">
                <button
                  className={`accordion-header ${openSection === 'avoid' ? 'open' : ''}`}
                  onClick={() => toggleSection('avoid')}
                >
                  <span><Icon name="xCircle" className="inline-icon" />피해야 할 것</span>
                  <span className="accordion-arrow">{openSection === 'avoid' ? '▲' : '▼'}</span>
                </button>
                {openSection === 'avoid' && (
                  <div className="accordion-body">
                    <div className="avoid-grid">
                      {s.avoid.map((item, i) => (
                        <div key={i} className="avoid-card">
                          <Icon name={AVOID_ICONS[item] ?? 'alert'} className="avoid-icon" />
                          <span className="avoid-label">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* 보관 기간 배너 */}
            <div className="period-banner">
              <Icon name="calendar" />
              <div>
                <p className="period-before">개봉 전 · {s.period.before}</p>
                <p className="period-after">개봉 후 · {s.period.after}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
