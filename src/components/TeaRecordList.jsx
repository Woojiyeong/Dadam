import TeaRecordItem from "./TeaRecordItem";

function TeaRecordList({ records, onDelete }) {
  if (records.length === 0) {
    return <p className="empty-records">아직 저장된 다도 기록이 없습니다.</p>;
  }

  return (
    <section className="tea-record-list" aria-label="저장된 다도 기록">
      {records.map((record) => (
        <TeaRecordItem key={record.id} record={record} onDelete={onDelete} />
      ))}
    </section>
  );
}

export default TeaRecordList;
