import { useEffect, useState } from "react";
import { supabase } from "./SupabaseClient.js";
import "./Dashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "./LanguageContext";

export default function Dashboard() {
  const { lang, toggleLanguage } = useLanguage(); // ✅ include toggleLanguage
  const user = JSON.parse(localStorage.getItem("user"));
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  if (!user) {
    window.location.href = "/login";
    return null;
  }

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    const { data, error } = await supabase
      .from("certificates")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching certificates:", error);
    } else {
      setCertificates(data);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />

      {/* ✅ Language toggle */}
      <div className="lang-toggle" style={{ textAlign: "right", margin: "10px" }}>
        <button onClick={toggleLanguage}>
          {lang === "en" ? "Kinyarwanda" : "English"}
        </button>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-card">
          <h1>
            {lang === "en"
              ? `Welcome, ${user.full_name} 👋`
              : `Murakaza neza, ${user.full_name} 👋`}
          </h1>
          <p className="email-text">{user.email}</p>

          <h2 className="section-title">
            {lang === "en" ? "Your Certificates" : "Impamyabumenyi Zawe"}
          </h2>

          {loading ? (
            <p>
              {lang === "en"
                ? "Loading certificates..."
                : "Turimo gupakurura impamyabumenyi..."}
            </p>
          ) : certificates.length === 0 ? (
            <div className="certificate-placeholder">
              <p>
                {lang === "en"
                  ? "To get your SkillsTab certificate, you must Learn from an Expert."
                  : "Kugira ngo ubone impamyabumenyi ya SkillsTab, ugomba kuba warigishijwe n'inzobere."}
              </p>
              <a href="/experts">
                <button className="experts-btn">
                  {lang === "en" ? "Learn from Experts" : "Igishwa n'inzobere"}
                </button>
              </a>
              <div className="certificate-template">
                <p>
                  {lang === "en"
                    ? "Certificate Template"
                    : "Urugero rw'Impamyabumenyi"}
                </p>
                <img
                  src="/src/assets/sample cert.png"
                  alt="Certificate Template"
                  className="template-img"
                />
              </div>
            </div>
          ) : (
            <div className="certificate-grid">
              {certificates.map((cert) => (
                <div key={cert.id} className="certificate-card">
                  <div className="certificate-header">
                    <h3>
                      {lang === "en"
                        ? `${cert.course_name} Certificate`
                        : `Impamyabumenyi ya ${cert.course_name}`}
                    </h3>
                  </div>
                  <div className="certificate-body">
                    <img
                      src={cert.thumbnail_url || "/images/certificate-template.png"}
                      alt={`${cert.course_name} certificate`}
                    />
                  </div>
                  <div className="certificate-footer">
                    <a href={cert.file_url} target="_blank" rel="noopener noreferrer">
                      <button className="download-btn">
                        {lang === "en" ? "📥 Download" : "📥 Kuramo"}
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button onClick={handleLogout} className="logout-btn">
            {lang === "en" ? "Logout" : "Sohoka"}
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
