import { NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";
import "./Sidebar.css";

const menuItems = [
  { to: "/home", icon: "home", label: "홈" },
  { to: "/timer", icon: "hourglass", label: "타이머" },
  { to: "/record", icon: "edit", label: "기록장" },
  { to: "/storage", icon: "archive", label: "보관법" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-mark">茶</span>
        <span>
          다담
          <small>Dadam</small>
        </span>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            <span className="sidebar-menu-icon">
              <Icon name={item.icon} />
            </span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
