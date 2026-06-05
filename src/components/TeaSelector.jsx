// TeaSelector 컴포넌트
// - 차 종류를 선택하는 버튼 목록 컴포넌트입니다.
// - 자기 자신은 상태(state)를 가지지 않고, props로 받은 값만 사용합니다. (presentational)
// - props
//   · teaList: 차 목록 배열 (각 항목에 id, name 이 있음)
//   · selectedTeaId: 현재 선택된 차의 id
//   · onTeaChange: 차를 선택했을 때 부모에게 알려주는 함수 (id를 인자로 전달)

function TeaSelector({ teaList, selectedTeaId, onTeaChange }) {
  return (
    <div className="tea-selector">
      <h2 className="tea-selector-title">차 종류 선택</h2>

      <div className="tea-selector-buttons">
        {teaList.map((tea) => {
          // 현재 선택된 차인지 확인해서 버튼 강조 클래스를 붙입니다.
          const isSelected = tea.id === selectedTeaId;
          const className = isSelected
            ? "tea-selector-button tea-selector-button-selected"
            : "tea-selector-button";

          return (
            <button
              key={tea.id}
              type="button"
              className={className}
              onClick={() => onTeaChange(tea.id)}
            >
              {tea.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TeaSelector;
