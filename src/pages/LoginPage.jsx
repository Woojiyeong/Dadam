import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.username === trimmedUsername && u.password === trimmedPassword
    );

    if (!user) {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("로그인 성공!");
    navigate("/home");
  };

  return (
    <main className="auth-page">
      <section className="auth-shell">
        <div className="auth-brand">
          <div className="auth-brand-overlay">
            <div className="auth-logo-mark">茶</div>
            <strong>다담</strong>
            <span>Dadam</span>
          </div>
        </div>

        <div className="login-container">
          <h2>
            <Icon name="cup" className="auth-title-icon" />
            <span>로그인</span>
          </h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />

            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

            <button type="submit">
              로그인
            </button>
          </form>

          <p>
            계정이 없으신가요?{" "}
            <button
              type="button"
              className="auth-link"
              onClick={() => navigate("/register")}
            >
              회원가입
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
