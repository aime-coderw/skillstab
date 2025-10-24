import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createClient } from "@supabase/supabase-js";
import "./Checkout.css";

// Initialize Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Checkout() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.02;
  const total = subtotal + tax;

  const handleSubmit = async () => {
    if (!name || !phone || !address) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!user?.id) {
      alert("Please log in to complete your purchase.");
      return;
    }

    const purchase = {
      customer_name: name,
      customer_phone: phone,
      customer_email: email || null,
      items: cart,
      subtotal,
      tax,
      total,
      payment_method: "Momo",
      status: "pending",
      created_at: new Date().toISOString(),
      user_id: user.id,
      buyer_name: name,
      phone,
      address,
      payment_code: "733014",
    };

    const { error } = await supabase.from("orders").insert([purchase]);

    if (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit your order. Make sure you have signed in");
    } else {
      setSubmitted(true);
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="checkout-page">
          <h2>Your cart is empty</h2>
        </div>
        <Footer />
      </>
    );
  }

  if (submitted) {
    return (
      <>
        <Navbar />
       <div className="checkout-page">
  <h2>Thank you for your purchase!</h2>
  <p>
    We’ve received your order. Please note that if your items need to be imported, 
    delivery may take up to one month. We appreciate your patience and will keep you updated.
  </p>
</div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <h2>Checkout</h2>

        <div className="cart-summary">
          <h3>Items:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.qty} = ${(item.price * item.qty).toFixed()}
              </li>
            ))}
          </ul>
          <p>Subtotal: ${subtotal.toFixed()}</p>
          <p>Tax (10%): ${tax.toFixed()}</p>
          <p>
            <strong>Total: ${total.toFixed()}</strong>
          </p>
        </div>

        <div className="payment-instructions">
          <h3>Payment Instructions:</h3>
          <p>
            Send payment via <strong>Momo</strong> to code{" "}
            <strong>733014</strong>.
          </p>
          <p>After payment, submit your order below.</p>
        </div>

        <div className="buyer-info">
          <h3>Your Information:</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="submit-btn" onClick={handleSubmit}>
            Submit Purchase
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
