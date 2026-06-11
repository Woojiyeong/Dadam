import Icon from "./Icon.jsx";

// BrewingStepCard 컴포넌트
// - 현재 단계의 "차 우리는 방법"을 카드 형태로 보여주는 컴포넌트입니다.
// - 상태(state)는 가지지 않고 props만 사용합니다. (presentational)
// - props
//   · step: 현재 단계 데이터 객체 { title, description, caution }
//   · currentStep: 현재 단계 번호(0부터 시작)
//   · totalSteps: 전체 단계 개수

function BrewingStepCard({ step, currentStep, totalSteps }) {
  // 화면에 보여줄 단계 번호는 1부터 시작하도록 +1 해줍니다.
  const stepNumber = currentStep + 1;

  return (
    <div className="brewing-step-card">
      {/* 몇 번째 단계인지 표시 */}
      <span className="brewing-step-card-badge">
        STEP {stepNumber} / {totalSteps}
      </span>

      {/* 단계 제목 */}
      <h3 className="brewing-step-card-title">{step.title}</h3>

      {/* 단계 설명 */}
      <p className="brewing-step-card-description">{step.description}</p>

      {/* 주의사항 */}
      <div className="brewing-step-card-caution">
        <strong><Icon name="alert" className="inline-icon" />주의사항</strong>
        <p>{step.caution}</p>
      </div>
    </div>
  );
}

export default BrewingStepCard;
