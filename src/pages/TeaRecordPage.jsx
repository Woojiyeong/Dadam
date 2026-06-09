import { useEffect, useState } from "react";
import TeaRecordForm from "../components/TeaRecordForm";
import TeaRecordList from "../components/TeaRecordList";

const STORAGE_KEY = "teaRecords";

const initialFormData = {
  teaType: "",
  aroma: "",
  taste: "",
  mood: "",
  memo: "",
};

function TeaRecordPage() {
  const [records, setRecords] = useState(() => {
    const savedRecords = localStorage.getItem(STORAGE_KEY);
    return savedRecords ? JSON.parse(savedRecords) : [];
  });
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecord = {
      id: crypto.randomUUID(),
      ...formData,
      date: new Date().toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setRecords((prevRecords) => [newRecord, ...prevRecords]);
    setFormData(initialFormData);
  };

  const handleDelete = (recordId) => {
    setRecords((prevRecords) => prevRecords.filter((record) => record.id !== recordId));
  };

  return (
    <main className="tea-record-page">
      <section className="page-intro">
        <p className="eyebrow">Tea Journal</p>
        <h1>다도 기록 저장</h1>
        <p>차를 마신 순간의 향, 맛, 기분과 메모를 남겨보세요.</p>
      </section>

      <TeaRecordForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />

      <section className="records-section">
        <h2>저장된 기록</h2>
        <TeaRecordList records={records} onDelete={handleDelete} />
      </section>
    </main>
  );
}

export default TeaRecordPage;
