import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import "./LoginPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const username = form.username.trim();
    const password = form.password.trim();

    if (!name || !username || !password) {
      alert("이름, 아이디, 비밀번호를 모두 입력해주세요.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((user) => user.username === username);

    if (exists) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }

    users.push({
      ...form,
      name,
      username,
      password,
      teaRecords: [],
      favoriteTea: [],
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("회원가입 완료!");
    navigate("/");
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
            <Icon name="leaf" className="auth-title-icon" />
            <span>회원가입</span>
          </h2>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />

            <input
              type="text"
              name="username"
              placeholder="아이디"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />

            <button type="submit">회원가입</button>
          </form>

          <p>
            이미 계정이 있으신가요?{" "}
            <button
              type="button"
              className="auth-link"
              onClick={() => navigate("/")}
            >
              로그인
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage;
