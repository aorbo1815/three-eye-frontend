import React, { useState } from "react";
import axios from "axios";

const TransactionForm = ({ type }) => {
  const [form, setForm] = useState({
    slipNo: "",
    cause: "",
    toWhom: "",
    byWhom: "",
    amount: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://three-eye-backend.onrender.com/api/transactions/${type}`;
      await axios.post(url, form);
      alert(`${type} transaction added!`);
      setForm({ slipNo: "", cause: "", toWhom: "", byWhom: "", amount: "" });
    } catch (err) {
      alert("Error adding transaction");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>{type === "credit" ? "Add Credit" : "Add Debit"}</h2>
      {["slipNo", "cause", "toWhom", "byWhom", "amount"].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          required
          style={styles.input}
        />
      ))}
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    margin: "20px auto",
    padding: "20px",
    background: "#f0f9ff",
    borderRadius: "10px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
    color: "#0f172a"
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd"
  },
  button: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default TransactionForm;
