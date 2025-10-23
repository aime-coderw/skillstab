import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CoursesCategory.css";

export default function CoursesCategory() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [language, setLanguage] = useState("en");

  // ✅ Check if user is logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login"); // Redirect to login
    }
  }, [navigate]);

  const allCourses = {
  en: {
    "culinary-skills": [
      "Baking: bread, cakes, and pastries",
      "Cooking: local & international dishes",
      "Food preservation & packaging",
      "Juice & smoothie making",
      "Coffee & barista basics",
      "Catering & event management",
    ],
    "craft-skills": [
      "Tailoring & fashion design",
      "Leather goods: shoes, bags, belts",
      "Jewelry making",
      "Woodworking & carpentry",
      "Metalwork & welding",
      "Pottery & ceramics",
    ],
    "digital-skills": [
      "Basic computer literacy",
      "Graphic design & video editing",
      "Mobile & web development",
      "Freelancing platforms (Fiverr, Upwork)",
      "Social media marketing",
      "Cybersecurity basics",
    ],
    enterpreneurship: [
      "Starting a small business",
      "Financial literacy & bookkeeping",
      "Sales & marketing",
      "E-commerce and online selling",
      "Personal branding & networking",
    ],
    "creative-skills": [
      "Music production & sound editing",
      "Graphic design & illustration",
      "Storytelling & creative writing",
      "Content creation (TikTok, YouTube, Instagram)",
      "Digital art & NFT creation",
    ],
    "agricultural-skills": [
      "Urban farming & hydroponics",
      "Beekeeping & honey production",
      "Mushroom cultivation",
      "Vegetable gardening & permaculture",
      "Animal husbandry basics",
    ],
    "health-skills": [
      "First Aid",
      "Fitness Coaching",
      "Nutrition & Healthy Cooking",
      "Mental Health Awareness",
    ],
    "home-care-skills": [
      "Soap Making: natural & handmade soaps",
      "Candle Making: scented & decorative",
      "Jams & Jellies: homemade preserves",
      "Natural Paints: eco-friendly paints",
      "Body Care Products: scrubs, lotions, balms",
    ],
  },
  rw: {
    "culinary-skills": [
      "Gukora imigati, amandazi, cakes n'ibindi",
      "Guteka ibiryo gakondo n’ibyo ku isi hose",
      "Kubika no gupfunyika ibiryo neza",
      "Gukora imitobe n’ibinyobwa bisembuye cyangwa ibidasembuye",
      "Gukora kawa cyangwa icyayi nka barista",
      "Gutegura ibiryo ku birori cyangwa ubucuruzi",
    ],
    "craft-skills": [
      "Kudoda no gushushanya imyenda",
      "Gukora ibintu by’uruhu: inkweto, imikufi, imikandara",
      "Gukora imitako n’imikufi",
      "Ubukorikori bw’ibiti",
      "Ubukorikori bw’ibyuma / welding",
      "Gukora ibikoresho bya ceramic",
    ],
    "digital-skills": [
      "Ubumenyi bwa mudasobwa",
      "Kwagura ubumenyi mu gushushanya no gukora amashusho",
      "Gukora porogaramu za telefoni n’imbuga",
      "Gukorera kuri Fiverr, Upwork n’izindi",
      "Gukoresha imbuga nkoranyambaga mu kwamamaza",
      "Ubumenyi mu mutekano wa interineti",
    ],
    "enterpreneurship": [
      "Gutangiza ubucuruzi buto",
      "Kumenya gucunga amafaranga neza",
      "Kugurisha no kwamamaza",
      "Gucuruza hifashishijwe interineti",
      "Kubaka izina ryawe no kwagura imikoranire",
    ],
    "creative-skills": [
      "Gukora umuziki no gutunganya amajwi",
      "Graphic design & illustration",
      "Kwandika inkuru no gukora ibihangano",
      "Gukora ibihangano kuri TikTok, YouTube, Instagram",
      "Digital art & gukora NFT",
    ],
    "agricultural-skills": [
      "Ubuhinzi bwo mu mijyi & hydroponics",
      "Korora inzuki no gukora ubuki",
      "Guhinga ibihumyo",
      "Guhinga imboga no kubungabunga ubutaka",
      "Korora amatungo yoroheje",
    ],
    "health-skills": [
      "Ubumenyi bwa mbere mu gihe cy’impanuka",
      "Imyitozo ngororamubiri",
      "Ubumenyi mu mirire myiza",
      "Kumenya iby’ubuzima bwo mu mutwe",
    ],
    "home-care-skills": [
      "Gukora isabune: kamere & yakozwe n’intoki",
      "Gukora amabuji: afite impumuro & ashyushye",
      "Gukora jams & jellies: ibiribwa byagumijwe mu rugo",
      "Gukora amabara kamere & kurengera ibidukikije",
      "Ibikoresho byo kwiyitaho: scrubs, lotions, balms",
    ],
  },
};


  const courses = allCourses[language][category] || [];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "rw" : "en");
  };

  return (
    <>
      <Navbar />
      

      <section className="courses-category-section">
        <div className="lang-toggle">
          <button onClick={toggleLanguage}>
            {language === "en" ? "Kinyarwanda" : "English"}
          </button>
        </div>

        <h2>
          {language === "en"
            ? `${category.replace("-", " ").toUpperCase()} Courses`
            : `Amasomo y'icyiciro cya ${category.replace("-", " ")}`}
        </h2>

        {courses.length === 0 ? (
          <p>
            {language === "en"
              ? "No courses found in this category."
              : "Nta masomo aboneka muri iki cyiciro."}
          </p>
        ) : (
          <div className="courses-grid">
            {courses.map((courseName, index) => {
              const enName = allCourses["en"][category][index];
              const rwName = allCourses["rw"][category][index];

              const slugify = (text) =>
                text
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, "")
                  .trim()
                  .replace(/\s+/g, "-");

              const enSlug = slugify(enName);
              const rwSlug = slugify(rwName);
              const slug = `${enSlug}--${rwSlug}`;

              return (
                <div key={index} className="course-card">
                  <h3>{courseName}</h3>
                  <button onClick={() => navigate(`/courses/${category}/${slug}`)}>
                    {language === "en" ? "Continue" : "Komeza"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}