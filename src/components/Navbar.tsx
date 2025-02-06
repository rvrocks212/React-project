import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userForm");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUserEmail(userData.email);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">React App</div>
      <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}><MenuIcon/></div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/counter" onClick={() => setMenuOpen(false)}>Counter</Link></li>
        <li><Link to="/form" onClick={() => setMenuOpen(false)}>Form</Link></li>
        <li><Link to="/editor" onClick={() => setMenuOpen(false)}>Editor</Link></li>
        <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
      <div className="auth-section">
        {userEmail ? (
          <span className="user-email">{userEmail}</span>
        ) : (
          <button className="login-button" onClick={() => alert("Redirect to login page")}>
            Log In
          </button>
        )}
      </div>
      </ul>
    </nav>
  );
};

export default Navbar;

