import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

// --- Import all images ---
import culinaryImg from "./assets/culinary.png";
import craftImg from "./assets/craft.jpeg";
import techImg from "./assets/tech.jpeg";
import enterImg from "./assets/enter.png";
import artImg from "./assets/art.jpeg";
import welImg from "./assets/wel.jpeg";
import agriImg from "./assets/agri.jpeg";
import careImg from "./assets/care.jpeg";

import scxImg from "./assets/scx.png";
import scaaImg from "./assets/scaa.png";
import splashImg from "./assets/splash.png";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [currentAd, setCurrentAd] = useState(0);

  // --- Categories with full description ---
  const categories = {
    en: [
      { 
        title: "Culinary & Food Skills", 
        image: culinaryImg,
        desc: [
          "1️⃣ Baking: bread, doughnuts, cakes, pastries",
          "2️⃣ Cooking: local & international dishes",
          "3️⃣ Food preservation & packaging",
          "4️⃣ Juice & smoothie making",
          "5️⃣ Coffee/tea brewing & barista skills",
          "6️⃣ Catering & event food management"
        ],
        link: "/courses/culinary-skills"
      },
      { 
        title: "Crafts & Arts Skills", 
        image: craftImg,
        desc: [
          "1️⃣ Tailoring & fashion design",
          "2️⃣ Leather goods: shoes, bags, belts",
          "3️⃣ Jewelry making",
          "4️⃣ Woodworking & carpentry",
          "5️⃣ Metalwork & welding",
          "6️⃣ Pottery & ceramics"
        ],
        link: "/courses/craft-skills"
      },
      { 
        title: "Tech & Digital Skills", 
        image: techImg,
        desc: [
          "1️⃣ Mobile app development",
          "2️⃣ Game design & animation",
          "3️⃣ Video production & editing",
          "4️⃣ Photography & photo editing",
          "5️⃣ Social media marketing",
          "6️⃣ Freelancing platforms mastery (Upwork, Fiverr, etc.)"
        ],
        link: "/courses/digital-skills"
      },
      { 
        title: "Entrepreneurial & Business Skills", 
        image: enterImg,
        desc: [
          "1️⃣ Micro-business creation & management",
          "2️⃣ Financial literacy & bookkeeping",
          "3️⃣ Sales & marketing strategies",
          "4️⃣ E-commerce / online selling (e.g., Jumia, Instagram shops)",
          "5️⃣ Personal branding & networking"
        ],
        link: "/courses/enterpreneurship"
      },
      { 
        title: "Creative & Media Skills", 
        image: artImg,
        desc: [
          "1️⃣ Music production & audio editing",
          "2️⃣ Graphic design & illustration",
          "3️⃣ Storytelling / creative writing",
          "4️⃣ Content creation for TikTok, Instagram, YouTube",
          "5️⃣ Digital art & NFT creation"
        ],
        link: "/courses/creative-skills"
      },
      { 
        title: "Health & Wellness Skills", 
        image: welImg,
        desc: [
          "1️⃣ Basic first aid & CPR",
          "2️⃣ Fitness coaching & personal training",
          "3️⃣ Nutrition & healthy cooking",
          "4️⃣ Mental health awareness & peer support"
        ],
        link: "/courses/health-skills"
      },
      { 
        title: "Agricultural & Green Skills",
        image: agriImg,
        desc: [
          "1️⃣ Urban farming & hydroponics",
          "2️⃣ Beekeeping & honey production",
          "3️⃣ Mushroom cultivation",
          "4️⃣ Vegetable gardening & permaculture",
          "5️⃣ Animal husbandry basics"
        ],
        link: "/courses/agricultural-skills"
      },
      { 
        title: "Home & Personal Care Skills", 
        image: careImg,
        desc: [
          "1️⃣ Soap Making: natural & handmade soaps",
          "2️⃣ Candle Making: scented & decorative",
          "3️⃣ Jams & Jellies: homemade preserves",
          "4️⃣ Natural Paints: eco-friendly paints",
          "5️⃣ Body care products: scrubs, lotions, balms"
        ],
        link: "/courses/home-care-skills"
      },
    ],

    rw: [
      { 
        title: "Ubumenyi mu Gutegura Ibiribwa", 
        image: culinaryImg,
        desc: [
          "1️⃣ Gukora imigati, amandazi, cakes, n’ibindi",
          "2️⃣ Guteka: ibiryo gakondo n’ibyo ku isi yose",
          "3️⃣ Kubika no gupfunyika ibiryo neza",
          "4️⃣ Gukora imitobe n’ibinyobwa",
          "5️⃣ Gukora kawa cyangwa icyayi nka barista",
          "6️⃣ Gutegura ibiryo mu birori"
        ],
        link: "/courses/culinary-skills"
      },
      { 
        title: "Ubumenyi mu Bukorikori", 
        image: craftImg,
        desc: [
          "1️⃣ Gukora imyenda no gushushanya imyenda",
          "2️⃣ Gukora ibintu by’uruhu: inkweto, imikufi, imikandara",
          "3️⃣ Gukora imitako y’umubiri",
          "4️⃣ Gukora ibintu mu biti cyangwa ibyuma",
          "5️⃣ Gukora ibintu mu byuma (welding)",
          "6️⃣ Gukora ibikoresho bya ceramic"
        ],
        link: "/courses/craft-skills"
      },
      { 
        title: "Ubumenyi mu Ikoranabuhanga",
        image: techImg,
        desc: [
          "1️⃣ Gukora porogaramu za telefoni",
          "2️⃣ Gukora imikino & animation",
          "3️⃣ Gukora amashusho no kuyatunganya",
          "4️⃣ Gufata amafoto no kuyatunganya",
          "5️⃣ Kwamamaza ku mbuga nkoranyambaga",
          "6️⃣ Gukorera kuri Upwork, Fiverr n’izindi"
        ],
        link: "/courses/digital-skills"
      },
      { 
        title: "Ubumenyi mu Bucuruzi",
        image: enterImg,
        desc: [
          "1️⃣ Gutangiza no gucunga ubucuruzi buto",
          "2️⃣ Ubumenyi mu micungire y’imari",
          "3️⃣ Ubumenyi mu kugurisha no kwamamaza",
          "4️⃣ Kugurisha ibicuruzwa ku mbuga nkoranyambaga",
          "5️⃣ Kubaka izina ryawe"
        ],
        link: "/courses/enterpreneurship"
      },
      { 
        title: "Ubumenyi mu Guhanga & Social Media", 
        image: artImg,
        desc: [
          "1️⃣ Gukora umuziki no gutunganya amajwi",
          "2️⃣ Graphic design & illustration",
          "3️⃣ Kwandika inkuru",
          "4️⃣ Gukora ibihangano ku mbuga nkoranyambaga: TikTok, Instagram, YouTube",
          "5️⃣ Digital art & NFT creation"
        ],
        link: "/courses/creative-skills"
      },
      { 
        title: "Ubumenyi mu Buhinzi", 
        image: agriImg,
        desc: [
          "1️⃣ Ubuhinzi bwo mu mijyi & hydroponics",
          "2️⃣ Ubworozi bw'inzuki",
          "3️⃣ Guhinga ibihumyo",
          "4️⃣ Guhinga imboga & permaculture",
          "5️⃣ Korora amatungo yoroheje"
        ],
        link: "/courses/agricultural-skills"
      },
      { 
        title: "Ubumenyi ku Buzima bwiza", 
        image: welImg,
        desc: [
          "1️⃣ Ubumenyi ku bikorwa bya mbere mu gihe cy’impanuka",
          "2️⃣ Ubumenyi bw'imyitozo ngororamubiri",
          "3️⃣ Ubumenyi mu mirire myiza",
          "4️⃣ Kumenya iby’ubuzima bwo mu mutwe"
        ],
        link: "/courses/health-skills"
      },
      { 
        title: "Ubumenyi mu Kwita ku Buzima n’Ibikoresho byo mu Rugo", 
        image: careImg,
        desc: [
          "1️⃣ Gukora isabune: kamere & yakozwe n’intoki",
          "2️⃣ Gukora buji: zifite impumuro kandi zishyushye",
          "3️⃣ Gukora jams & jellies: ibiribwa bibikwa mu rugo",
          "4️⃣ Gukora amabara kamere & kurengera ibidukikije",
          "5️⃣ Ibikoresho byo kwiyitaho: scrubs, lotions, balms"
        ],
        link: "/courses/home-care-skills"
      },
    ]
  };

  const adImages = [scxImg, scaaImg];

  useEffect(() => {
    const timer = setInterval(() => setCurrentAd((prev) => (prev + 1) % adImages.length), 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const toggleLanguage = () => setLanguage(language === "en" ? "rw" : "en");

  return (
    <div className="home-container">
      <Navbar />
      <div className="lang-toggle">
        <button onClick={toggleLanguage}>{language === "en" ? "Kinyarwanda" : "English"}</button>
      </div>

      <section className="hero">
        {language === "en" ? (
          <>
            <h1>Empowering Rwandan Youth with Free Skills</h1>
            <p>Learn, Create, and Earn — gain skills to shape your future.</p>
          </>
        ) : (
          <>
            <h1>Dufasha urubyiruko rw’u Rwanda kubona ubumenyi ku buntu</h1>
            <p>Iga, Hanga, kandi Winjize — menya ubumenyi bugufasha kubaka ejo hazaza hawe.</p>
          </>
        )}
        <Link to="/login">
          <button>{language === "en" ? "Get Started" : "Tangira Ubu"}</button>
        </Link>
      </section>

      <section className="ad-section">
        <div className="slideshow">
          {adImages.map((src, idx) => (
            <img key={idx} src={src} alt={`Ad ${idx+1}`} className={`ad-slide ${idx === currentAd ? "visible" : ""}`} />
          ))}
        </div>
        <div className="ad-text">
          {language === "en" ? (
            <>
              <h2 className="title-with-logo"><img src={splashImg} alt="ReelGold" /> ReelGold – Create • Share • Earn</h2>
              <p>Join Africa’s short-video platform: upload, share, and monetize your creativity. Explore creator tools, earn rewards, and grow your audience.</p>
            </>
          ) : (
            <>
              <h2 className="title-with-logo"><img src={splashImg} alt="ReelGold" /> ReelGold – Hanga • Sangiza • Injiza</h2>
              <p>Injira ku rubuga rw'Abanyafurika rwo gusangiza amashusho magufi: shyiraho video, yisangize abandi, winjize amafaranga.</p>
            </>
          )}
          <button onClick={() => window.open("https://reelgold.vercel.app", "_blank")}>{language === "en" ? "Get Started" : "Tangira Ubu"}</button>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="skills-title">{language === "en" ? "Explore Skills" : "Reba ibyiciro by’amasomo"}</h2>
        <div className="skills-grid">
          {categories[language].map((cat, i) => (
            <Link to={cat.link} key={i} className="skill-card-link">
              <div className="skill-card">
                <h3>{cat.title}</h3>
                {cat.image && <img src={cat.image} alt={cat.title} className="skill-image" />}
                <ul className="desc-list">{cat.desc.map((item, index) => <li key={index}>{item}</li>)}</ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
