import teaOptions from "../data/teaOptions";

function TeaRecordForm({ formData, onChange, onSubmit }) {
  return (
    <form className="tea-record-form" onSubmit={onSubmit}>
      <label className="form-field">
        <span>차 종류</span>
        <select name="teaType" value={formData.teaType} onChange={onChange} required>
          <option value="">차를 선택하세요</option>
          {teaOptions.map((tea) => (
            <option key={tea} value={tea}>
              {tea}
            </option>
          ))}
        </select>
      </label>

      <label className="form-field">
        <span>향</span>
        <input
          name="aroma"
          type="text"
          value={formData.aroma}
          onChange={onChange}
          placeholder="예: 은은한 꽃향, 고소함"
        />
      </label>

      <label className="form-field">
        <span>맛</span>
        <input
          name="taste"
          type="text"
          value={formData.taste}
          onChange={onChange}
          placeholder="예: 산뜻함, 묵직함, 단맛"
        />
      </label>

      <label className="form-field">
        <span>기분</span>
        <input
          name="mood"
          type="text"
          value={formData.mood}
          onChange={onChange}
          placeholder="예: 차분함, 맑음, 편안함"
        />
      </label>

      <label className="form-field form-field-full">
        <span>메모</span>
        <textarea
          name="memo"
          value={formData.memo}
          onChange={onChange}
          placeholder="오늘의 다도 경험을 기록해보세요."
          rows="5"
        />
      </label>

      <button className="save-button" type="submit">
        저장
      </button>
    </form>
  );
}

export default TeaRecordForm;
