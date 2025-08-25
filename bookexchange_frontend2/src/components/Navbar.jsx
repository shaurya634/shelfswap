import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkStyle = {
    marginRight: "1rem",
    textDecoration: "none",
    color: "inherit",
  };

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: darkMode ? "#90cdf4" : "blue",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        background: darkMode ? "#1f1f1f" : "#f0f0f0",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <div>
        <NavLink
          to="/books"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          📚 All Books
        </NavLink>
        <NavLink
          to="/upload"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
        >
          📤 Upload Book
        </NavLink>
      </div>
      <div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginRight: "1rem",
            padding: "0.4rem 0.7rem",
            borderRadius: "6px",
            background: darkMode ? "#333" : "#ddd",
            border: "none",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button
          onClick={handleLogout}
          style={{
            padding: "0.4rem 0.7rem",
            borderRadius: "6px",
            background: darkMode ? "#444" : "#e0e0e0",
            border: "none",
            cursor: "pointer",
          }}
        >
          🚪 Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

