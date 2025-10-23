import { useState } from "react";
import { supabase } from "./supabaseClient"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./order.css";

export default function OrderUnlistedPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState("en"); // "en" for English, "rw" for Kinyarwanda

  // Dictionary for bilingual text
  const texts = {
    en: {
      pageTitle: "Order Unlisted Product",
      pageDesc: "Fill the form below to request a product not listed in our store.",
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      message: "Message (Product details)",
      submit: "Submit",
      submitting: "Submitting...",
      success: "Message sent successfully!",
      error: "Error submitting form."
    },
    rw: {
      pageTitle: "Tumiza Ibicuruzwa bitagaragazwaga",
      pageDesc: "Sobanura hano hasi kugira ngo usabe igicuruzwa kitari kuri store yacu.",
      name: "Izina",
      email: "Imeli",
      phone: "Telefone",
      message: "Ubutumwa (Amakuru y'igicuruzwa)",
      submit: "Ohereza",
      submitting: "Birikoherezwa...",
      success: "Ubutumwa bwoherejwe neza!",
      error: "Habaye ikosa mu kohereza, ongera ugerageze."
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(texts[lang].submitting);

    const { error } = await supabase.from("messages").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message
      }
    ]);

    if (error) {
      console.error(error);
      setStatus(texts[lang].error);
    } else {
      setStatus(texts[lang].success);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="order-page">
        {/* Language Toggle */}
        <div className="lang-switcher-container">
  <button 
    className="lang-switcher" 
    onClick={() => setLang(lang === "en" ? "rw" : "en")}
  >
    {lang === "en" ? "Kinyarwanda" : "English"}
  </button>
</div>


        <h2>{texts[lang].pageTitle}</h2>
        <p>{texts[lang].pageDesc}</p>

        <form onSubmit={handleSubmit} className="order-form">
          <label>
            {texts[lang].name}:
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            {texts[lang].email}:
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            {texts[lang].phone}:
            <input type="text" name="phone" value={form.phone} onChange={handleChange} />
          </label>

          <label>
            {texts[lang].message}:
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </label>

          <button type="submit">{texts[lang].submit}</button>
        </form>

        {status && <p className="status">{status}</p>}
      </div>
      <Footer />
    </>
  );
}
