// 차 카드 컴포넌트
// - 차 한 종류를 "카드" 형태로 보여주는 표현(presentational) 컴포넌트이다.
// - 상태(state)는 직접 관리하지 않고, 부모(TeaLearningPage)에서 props 로 받아 사용한다.
//
// props
//  - tea        : 보여줄 차 데이터 객체 ({ id, name, description ... })
//  - isSelected : 현재 선택된 카드인지 여부 (true 면 강조 스타일 적용)
//  - onSelect   : 카드를 클릭했을 때 실행할 함수 (선택 처리를 부모에게 위임)

function TeaCard({ tea, isSelected, onSelect }) {
  // 선택 상태에 따라 클래스명을 다르게 적용한다.
  // - 기본: "tea-card"
  // - 선택됨: "tea-card tea-card-selected" (CSS 에서 테두리/배경 강조)
  const cardClassName = isSelected ? "tea-card tea-card-selected" : "tea-card";

  return (
    <button
      type="button"
      className={cardClassName}
      // 클릭하면 이 카드의 id 를 부모에게 전달한다.
      onClick={() => onSelect(tea.id)}
    >
      <h3 className="tea-card-name">{tea.name}</h3>
      <p className="tea-card-description">{tea.description}</p>
    </button>
  );
}

export default TeaCard;
