import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("token", res.data.token);
      // Fetch user role from backend or temporarily store it
      const role = res.data.userId.startsWith("Admin") ? "admin" : "employee";
      localStorage.setItem("role", role);
      alert("Login successful");
      navigate("/credit"); // Redirect to credit page after login
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required style={styles.input} />
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
};

const styles = {
  form: {
    margin: "auto", padding: 20, background: "#e0ffe0",
    width: 300, borderRadius: 10, marginTop: 50, display: "flex", flexDirection: "column"
  },
  input: { marginBottom: 10, padding: 10, borderRadius: 5, border: "1px solid #ccc" },
  button: { padding: 10, background: "#10b981", color: "white", border: "none", borderRadius: 5 }
};

export default LoginPage;
