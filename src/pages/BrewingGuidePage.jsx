// BrewingGuidePage
// - "차 우리는 과정 가이드 기능"의 실제 메인 페이지입니다.
// - 이 페이지에서만 상태(state)를 관리하고,
//   하위 컴포넌트(TeaSelector, BrewingProgress, BrewingStepCard)에는
//   props로 값과 함수를 내려줍니다.

import { useState, useEffect } from "react";
import brewingData from "../data/brewingData.js";
import TeaSelector from "../components/TeaSelector.jsx";
import BrewingProgress from "../components/BrewingProgress.jsx";
import BrewingStepCard from "../components/BrewingStepCard.jsx";

// LocalStorage에 저장할 때 사용할 key 이름 (상수로 관리)
const STORAGE_KEY = "selectedBrewingTeaId";

function BrewingGuidePage() {
  // [상태 1] 현재 선택된 차의 id
  // - 처음에는 데이터의 첫 번째 차(녹차)를 기본값으로 사용합니다.
  const [selectedTeaId, setSelectedTeaId] = useState(brewingData[0].id);

  // [상태 2] 현재 단계 번호 (0부터 시작하는 인덱스)
  const [currentStep, setCurrentStep] = useState(0);

  // [useEffect ①] 페이지가 처음 열릴 때 한 번 실행
  // - LocalStorage에 저장해 둔 "마지막으로 선택한 차"를 불러옵니다.
  // - 저장된 값이 있고, 실제 데이터에 존재하는 차일 때만 적용합니다.
  useEffect(() => {
    const savedId = localStorage.getItem(STORAGE_KEY);

    if (savedId !== null) {
      // LocalStorage 값은 문자열이므로 숫자로 바꿔줍니다.
      const savedTeaId = Number(savedId);

      // 저장된 id가 실제 차 목록에 있는지 확인합니다.
      const exists = brewingData.some((tea) => tea.id === savedTeaId);
      if (exists) {
        setSelectedTeaId(savedTeaId);
      }
    }
  }, []); // 빈 배열 → 처음 마운트될 때 한 번만 실행

  // [useEffect ②] 선택된 차(selectedTeaId)가 바뀔 때마다 실행
  // - 선택한 차 id를 LocalStorage에 저장합니다. (새로고침해도 유지)
  // - 차가 바뀌면 단계를 처음(0번)부터 다시 시작합니다.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(selectedTeaId));
    setCurrentStep(0);
  }, [selectedTeaId]);

  // 현재 선택된 차 객체를 찾습니다.
  const selectedTea = brewingData.find((tea) => tea.id === selectedTeaId);

  // 선택된 차의 단계 배열과 전체 단계 수
  const steps = selectedTea.steps;
  const totalSteps = steps.length;

  // 현재 단계가 마지막 단계인지 여부
  const isLastStep = currentStep === totalSteps - 1;

  // 차 종류를 바꿀 때 호출되는 함수
  // - selectedTeaId만 바꿔주면, 위의 useEffect ②가 단계 초기화를 처리합니다.
  function handleTeaChange(teaId) {
    setSelectedTeaId(teaId);
  }

  // "이전 단계" 버튼: 현재 단계가 0보다 클 때만 한 단계 뒤로
  function handlePrevStep() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  // "다음 단계" 버튼: 마지막 단계가 아닐 때만 한 단계 앞으로
  function handleNextStep() {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  return (
    <div className="brewing-guide-page">
      {/* 페이지 제목 */}
      <h1 className="brewing-guide-title">차 우리는 과정 가이드</h1>

      {/* 1) 차 선택 영역 */}
      <TeaSelector
        teaList={brewingData}
        selectedTeaId={selectedTeaId}
        onTeaChange={handleTeaChange}
      />

      {/* 2) 기본 정보 영역 (물 온도 / 우림 시간 / 찻잎 양) */}
      <div className="brewing-info">
        <div className="brewing-info-item">
          <span className="brewing-info-label">물 온도</span>
          <span className="brewing-info-value">{selectedTea.waterTemp}</span>
        </div>
        <div className="brewing-info-item">
          <span className="brewing-info-label">우림 시간</span>
          <span className="brewing-info-value">{selectedTea.steepTime}</span>
        </div>
        <div className="brewing-info-item">
          <span className="brewing-info-label">찻잎 양</span>
          <span className="brewing-info-value">{selectedTea.teaAmount}</span>
        </div>
      </div>

      {/* 3) 진행률 영역 */}
      <BrewingProgress currentStep={currentStep} totalSteps={totalSteps} />

      {/* 4) 단계 안내 카드 영역 */}
      <BrewingStepCard
        step={steps[currentStep]}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />

      {/* 5) 이전 / 다음 버튼 영역 */}
      <div className="guide-button-group">
        <button
          type="button"
          className="guide-button"
          onClick={handlePrevStep}
          disabled={currentStep === 0} // 첫 단계에서는 비활성화
        >
          이전 단계
        </button>

        <button
          type="button"
          className="guide-button"
          onClick={handleNextStep}
          disabled={isLastStep} // 마지막 단계에서는 비활성화
        >
          다음 단계
        </button>
      </div>

      {/* 6) 마지막 단계까지 완료하면 안내 문구 표시 */}
      {isLastStep && (
        <p className="guide-complete">차 우리는 과정이 완료되었습니다.</p>
      )}
    </div>
  );
}

export default BrewingGuidePage;
