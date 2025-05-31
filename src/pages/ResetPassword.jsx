import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PasswordValidator from "../components/PasswordValidator";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
      alert("Password reset successful. You can now login.");
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.error || "Reset failed.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🔒 Reset Password</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="password"
          placeholder="Enter new strong password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <PasswordValidator password={password} />

        <button type="submit" style={styles.button}>Reset</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px", margin: "50px auto", padding: "20px",
    background: "#fff7ed", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  form: { display: "flex", flexDirection: "column" },
  input: { padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid #ccc" },
  button: { padding: "10px", backgroundColor: "#f97316", color: "#fff", border: "none", borderRadius: "5px" }
};

export default ResetPassword;
