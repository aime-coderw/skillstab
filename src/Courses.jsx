import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Courses() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");

  const categories = {
    en: [
      { name: "Culinary & Food Skills", slug: "culinary-skills" },
      { name: "Home & Personal Care Skills", slug: "home-care-skills" }, // ✅ new
      { name: "Crafts & Arts Skills", slug: "craft-skills" },
      { name: "Tech & Digital Skills", slug: "digital-skills" },
      { name: "Entrepreneurial & Business Skills", slug: "enterpreneurship" },
      { name: "Creative & Media Skills", slug: "creative-skills" },
      { name: "Agricultural & Green Skills", slug: "agricultural-skills" },
      { name: "Health & Wellness Skills", slug: "health-skills" },
    ],
    rw: [
      { name: "Ubumenyi mu Gutegura Ibiribwa", slug: "culinary-skills" },
      { name: "Ubumenyi mu Kwita ku Buzima n’Ibikoresho byo mu Rugo", slug: "home-care-skills" }, // ✅ new
      { name: "Ubumenyi mu Bukorikori", slug: "craft-skills" },
      { name: "Ubumenyi mu Ikoranabuhanga", slug: "digital-skills" },
      { name: "Ubumenyi mu Bucuruzi", slug: "enterpreneurship" },
      { name: "Ubumenyi mu Guhanga & Social Media", slug: "creative-skills" },
      { name: "Ubumenyi mu Buhinzi", slug: "agricultural-skills" },
      { name: "Ubumenyi ku Buzima bwiza", slug: "health-skills" },
    ],
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "rw" : "en");
  };

  return (
    <>
      <Navbar />

      <div className="courses-container">
        {/* Language toggle */}
        <div className="lang-toggle">
          <button onClick={toggleLanguage}>
            {language === "en" ? "Kinyarwanda" : "English"}
          </button>
        </div>

        <h1>
          {language === "en"
            ? "Explore Skill Categories"
            : "Reba ibyiciro by’amasomo"}
        </h1>

        <div className="courses-grid">
          {categories[language].map((cat, i) => (
            <div
              key={i}
              className="course-card"
              onClick={() => navigate(`/courses/${cat.slug}`)}
              style={{ cursor: "pointer" }}
            >
              <h3>{cat.name}</h3>
              <p>
                {language === "en"
                  ? `Click to explore ${cat.name} lessons`
                  : `Kanda urebe amasomo y' ${cat.name}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
