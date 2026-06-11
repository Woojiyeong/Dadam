// BrewingProgress 컴포넌트
// - 현재 진행 단계를 보여주는 컴포넌트입니다. (예: 2 / 5 단계)
// - progress bar(진행률 막대) 형태로 얼마나 진행됐는지 표시합니다.
// - 상태(state)는 가지지 않고 props만 사용합니다. (presentational)
// - props
//   · currentStep: 현재 단계 번호(0부터 시작하는 인덱스)
//   · totalSteps: 전체 단계 개수

function BrewingProgress({ currentStep, totalSteps }) {
  // 화면에 보여줄 단계 번호는 1부터 시작하도록 +1 해줍니다.
  const displayStep = currentStep + 1;

  // 진행률(%) 계산: (현재 단계 번호 / 전체 단계) * 100
  // totalSteps가 0이면 나누기 오류가 나므로 안전하게 0으로 처리합니다.
  const percent =
    totalSteps > 0 ? Math.round((displayStep / totalSteps) * 100) : 0;

  return (
    <div className="brewing-progress">
      <div className="brewing-progress-top">
        <div className="brewing-progress-label">
          {displayStep} / {totalSteps} 단계
        </div>

        <span className="brewing-progress-percent">{percent}%</span>
      </div>

      {/* 진행률 막대: 안쪽 막대의 너비를 percent% 로 설정 */}
      <div className="brewing-progress-bar">
        <div
          className="brewing-progress-bar-fill"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="brewing-progress-dots" aria-hidden="true">
        {Array.from({ length: totalSteps }, (_, index) => (
          <span
            key={index}
            className={`brewing-progress-dot ${
              index <= currentStep ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default BrewingProgress;
