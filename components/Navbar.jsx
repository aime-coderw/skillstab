import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "./Navbar.css";
import { useLanguage } from "../src/LanguageContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">SkillsTab</div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">{lang === "en" ? "Home" : "Ahabanza"}</Link></li>
          <li><Link to="/courses">{lang === "en" ? "Courses" : "Amasomo"}</Link></li>
          <li><Link to="/store">{lang === "en" ? "ToolKit Store" : "Ububiko bw'Ibikenewe"}</Link></li>
          <li><Link to="/contact">{lang === "en" ? "Contact" : "Twandikire"}</Link></li>
          <li><Link to="/dashboard">{lang === "en" ? "Account" : "Konti"}</Link></li>
          <li>
            <Link to="/signup">
              <button className="join-btn">
                {lang === "en" ? "Join Now" : "Injira Ubu"}
              </button>
            </Link>
          </li>
          <li><Link to="/experts">{lang === "en" ? "Learn from Experts" : "Igishwa n'inzobere"}</Link></li>
        </ul>

        {/* 🌍 Language Toggle */}
        <div className="lang-toggle" onClick={toggleLanguage}>
          {lang === "en" ? "English EN" : "Kinyarwanda"}
        </div>

        {/* 🍔 Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
