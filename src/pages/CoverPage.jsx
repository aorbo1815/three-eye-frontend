import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/threeeye-logo.png.png";

const CoverPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <motion.img
        src={logo}
        alt="Three Eye Logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={styles.logo}
      />
      <h1 style={styles.heading}>
        Welcome to <span style={{ color: "#6b7280" }}>Three Eye</span> Trading
      </h1>
      <div style={styles.buttons}>
        <button
          onClick={() => navigate("/login")}
          style={{ ...styles.btn, backgroundColor: "#f59e0b" }}
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/register")}
          style={{ ...styles.btn, backgroundColor: "#10b981" }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f0f4f8",
    textAlign: "center",
  },
  logo: {
    width: "250px",
    marginBottom: "30px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#1f2937",
  },
  buttons: {
    display: "flex",
    gap: "20px",
  },
  btn: {
    padding: "12px 24px",
    fontSize: "1.1rem",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
  },
};

export default CoverPage;
