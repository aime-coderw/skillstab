import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./Signup.css";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    try {
      // ✅ 1️⃣ Sign up and send email verification
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "https://yourwebsite.com/login", // change to your domain
        },
      });

      if (authError) throw authError;

      // ✅ 2️⃣ Insert into your custom users table
      const { error: tableError } = await supabase.from("users").insert([
        {
          id: authData.user.id,
          full_name: fullName,
          email,
          is_admin: false,
        },
      ]);

      if (tableError) throw tableError;

      // ✅ 3️⃣ Show verification message instead of redirect
      setMessage(
        "✅ Account created! Please check your email to verify your account before logging in."
      );
    } catch (err) {
      console.error(err);
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
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
        <button type="submit">Sign Up</button>
      </form>

      <p className="signin-link">
        Already have an account?{" "}
        <Link to="/login" className="login-link">Sign in</Link>
      </p>

      {message && <p className="msg">{message}</p>}
    </div>
  );
}
