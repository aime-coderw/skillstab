import { useState } from "react";
import { supabase } from "./SupabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Experts.css";

export default function Experts() {
  const [language, setLanguage] = useState("en");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "rw" : "en");
  };

  const content = {
    en: {
      title: "Learn from Experts",
      description:
        "Fill in the form below and we’ll connect you with a skilled mentor or expert in your chosen field.",
      form: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "What skill or field do you want to learn?",
        submit: "Submit",
        submitting: "Submitting...",
      },
      thankYou: {
        title: "🎉 Thank you!",
        message:
          "Your request has been received. Our team will reach out to connect you with an expert soon.",
      },
      switch: "Kinyarwanda",
    },
    rw: {
      title: "Igishwa n'inzobere",
      description:
        "Uzuza ifishi iri hasi, kugira ngo tuguhuze n'inzobere mu rwego ushaka kwiga.",
      form: {
        name: "Amazina Yawe",
        email: "Imeli Yawe",
        phone: "Numero ya Telefone",
        message: "Ni ubuhe bumenyi ushaka kwiga?",
        submit: "Ohereza",
        submitting: "Iyoherezwa...",
      },
      thankYou: {
        title: "Murakoze!",
        message:
          "Ibisobanuro byawe byakiriwe. Itsinda ryacu rizakuvugisha vuba riguhuze n’inzobere.",
      },
      switch: "English",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      alert(language === "en" ? "⚠️ Please fill in all fields." : "⚠️ Uzuza imyanya yose.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("messages").insert([
      {
        name,
        email,
        phone,
        message,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("❌ Error submitting form:", error);
      alert(language === "en"
        ? "Failed to submit form. Try again later."
        : "Kohereza byanze. Ongera ugerageze nyuma.");
    } else {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="experts-page">
        {/* Language Switch Button */}
        <div className="language-toggle">
          <button onClick={toggleLanguage} className="toggle-btn">
            {content[language].switch}
          </button>
        </div>

        <h1>{content[language].title}</h1>
        <p>{content[language].description}</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="experts-form">
            <input
              type="text"
              placeholder={content[language].form.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder={content[language].form.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder={content[language].form.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              placeholder={content[language].form.message}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading
                ? content[language].form.submitting
                : content[language].form.submit}
            </button>
          </form>
        ) : (
          <div className="thank-you">
            <h2>{content[language].thankYou.title}</h2>
            <p>{content[language].thankYou.message}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
