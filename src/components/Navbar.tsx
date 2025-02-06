import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem("userForm") ? JSON.parse(localStorage.getItem("userForm")!).email : null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("userForm");
      setUserEmail(storedUser ? JSON.parse(storedUser).email : null);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userForm");
    setUserEmail(null);
    navigate("/"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">React App</div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <MenuIcon />
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        {userEmail && (
          <>
            <li>
              <Link to="/counter" onClick={() => setMenuOpen(false)}>Counter</Link>
            </li>
            <li>
              <Link to="/form" onClick={() => setMenuOpen(false)}>Form</Link>
            </li>
            <li>
              <Link to="/editor" onClick={() => setMenuOpen(false)}>Editor</Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            </li>
          </>
        )}
        <div className="auth-section">
          {userEmail ? (
            <>
              <span className="user-email">{userEmail}</span>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <button className="login-button" onClick={() => navigate("/")}>
              Log In
            </button>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;


