import { useState } from "react";
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
          <li><a href="/">{lang === "en" ? "Home" : "Ahabanza"}</a></li>
          <li><a href="/courses">{lang === "en" ? "Courses" : "Amasomo"}</a></li>
          <li><a href="/store">{lang === "en" ? "ToolKit Store" : "Ububiko bw'Ibikenewe"}</a></li>
          <li><a href="/contact">{lang === "en" ? "Contact" : "Twandikire"}</a></li>
          <li><a href="/dashboard">{lang === "en" ? "Account" : "Konti"}</a></li>
          <li>
            <a href="/signup">
              <button className="join-btn">
                {lang === "en" ? "Join Now" : "Injira Ubu"}
              </button>
            </a>
          </li>
           <li><a href="/experts">{lang === "en" ? "Learn from Experts" : "Igishwa n'inzobere"}</a></li>
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
