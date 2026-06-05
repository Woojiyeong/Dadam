// App 컴포넌트
// - 전체 페이지를 불러오는 역할만 한다. (상태 관리/기능 로직 없음)
// - 추후 다른 페이지가 추가되어도 이 파일은 단순하게 유지한다.

import TeaLearningPage from "./pages/TeaLearningPage.jsx";
import "./App.css";

function App() {
  return <TeaLearningPage />;
}

export default App;
