function TeaRecordItem({ record, onDelete }) {
  return (
    <article className="tea-record-card">
      <div className="record-card-header">
        <div>
          <p className="record-date">{record.date}</p>
          <h2>{record.teaType}</h2>
        </div>
        <button className="delete-button" type="button" onClick={() => onDelete(record.id)}>
          삭제
        </button>
      </div>

      <dl className="record-details">
        <div>
          <dt>향</dt>
          <dd>{record.aroma || "기록 없음"}</dd>
        </div>
        <div>
          <dt>맛</dt>
          <dd>{record.taste || "기록 없음"}</dd>
        </div>
        <div>
          <dt>기분</dt>
          <dd>{record.mood || "기록 없음"}</dd>
        </div>
      </dl>

      {record.memo && <p className="record-memo">{record.memo}</p>}
    </article>
  );
}

export default TeaRecordItem;
