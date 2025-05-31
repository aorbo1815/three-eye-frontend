import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://three-eye-backend.onrender.com/api/auth/forgot-password", { email });
      setMessage(res.data.message || "Check your email for reset link.");
    } catch (err) {
      setMessage(err.response?.data?.error || "Error sending reset link.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🔐 Forgot Password</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px", margin: "50px auto", padding: "20px",
    background: "#f0fdf4", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #ccc" },
  button: { padding: "10px", backgroundColor: "#10b981", color: "#fff", border: "none", borderRadius: "5px" }
};

export default ForgotPassword;
