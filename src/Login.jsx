import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import { supabase } from "./supabaseClient";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    try {
      // 1️⃣ Sign in with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      // 2️⃣ Fetch user info from users table
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("id", authData.user.id)
        .single();

      if (userError) throw userError;

      // Save user session
      localStorage.setItem("user", JSON.stringify(userData));

      setMessage("✅ Login successful!");

      // Redirect after 1 second
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err) {
      console.error(err);
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Back</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {/* ✅ Signup link below the login button */}
      <p className="signup-link">
        Don’t have an account?{" "}
        <Link to="/signup" className="signup-btn">
          Sign up
        </Link>
      </p>

      {message && <p className="msg">{message}</p>}
    </div>
  );
}
