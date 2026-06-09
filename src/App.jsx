import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BrewingGuidePage from "./pages/BrewingGuidePage";
import TimerPage from "./pages/TimerPage";
import TeaRecordPage from "./pages/TeaRecordPage";
import TeaStoragePage from "./pages/TeaStoragePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/brewing/:id" element={<BrewingGuidePage />} />

        <Route path="/timer" element={<TimerPage />} />

        <Route path="/record" element={<TeaRecordPage />} />

        <Route path="/storage" element={<TeaStoragePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
