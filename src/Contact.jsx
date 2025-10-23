import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "@supabase/supabase-js";
import "./Contact.css";

// Initialize Supabase (optional, if storing messages)
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    // Optional: Save message to Supabase
    const { data, error } = await supabase.from("messages").insert([
      {
        name,
        email,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error(error);
      setError("❌ Failed to send message. Try again.");
    } else {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p className="contact-intro">
          Have questions or feedback? Fill out the form or reach out via email or WhatsApp.
        </p>

        <div className="contact-container">
          <div className="contact-form-container">
            {submitted ? (
              <div className="contact-success">
                <h2>✅ Message Sent!</h2>
                <p>Thank you for contacting us. We will get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {error && <p className="form-error">{error}</p>}
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send Message</button>
              </form>
            )}
          </div>

          <div className="contact-info-container">
            <div className="contact-info">
              <h3>Other Ways to Reach Us</h3>
              <p>
                📧 Email: <a href="mailto:skillstab.rw@gmail.com">skillstab.rw@gmail.com</a>
              </p>
              <p>
                📱 WhatsApp: <a href="https://wa.me/250791231993">+250 791 231 993</a>
              </p>
              <p>
                🌐 Social: 
                <a href="https://twitter.com/aimenilo" target="_blank">Twitter</a> | 
                <a href="https://instagram.com/aimenilo" target="_blank">Instagram</a>
              </p>
            </div>
            <div className="contact-map">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.1234567890!2d30.1234567!3d-1.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0xabcdef1234567890!2sYour+Company+Name!5e0!3m2!1sen!2srw!4v1690000000000!5m2!1sen!2srw"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
