import React, { useState } from "react";
import axios from "axios";
import PasswordValidator from "../components/PasswordValidator";

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://three-eye-backend.onrender.com/api/auth/register", form);
      alert(`Registered successfully. Your ID is: ${res.data.userId}`);
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👤 Register New User</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          required
          value={form.name}
          style={styles.input}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          value={form.email}
          style={styles.input}
        />

        <input
          name="password"
          type="password"
          placeholder="Strong Password"
          onChange={handleChange}
          required
          value={form.password}
          style={styles.input}
        />
        <PasswordValidator password={form.password} />

        <select
          name="role"
          onChange={handleChange}
          value={form.role}
          style={styles.input}
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#f0f9ff",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.5rem",
    color: "#1e3a8a"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    marginBottom: "12px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem"
  },
  button: {
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default RegisterPage;
