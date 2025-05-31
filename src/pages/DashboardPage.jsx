import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardPage = () => {
  const [summary, setSummary] = useState({
    creditTotal: 0,
    debitTotal: 0,
    balance: 0,
    todayCredits: 0,
    todayDebits: 0,
  });

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    const res = await axios.get("http://localhost:5000/api/transactions/dashboard");
    setSummary(res.data);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>📊 Dashboard Summary</h2>

      <div style={styles.cardRow}>
        <Card title="Total Credit" value={summary.creditTotal} color="#dcfce7" emoji="💰" />
        <Card title="Total Debit" value={summary.debitTotal} color="#fee2e2" emoji="💸" />
        <Card title="Current Balance" value={summary.balance} color="#e0f2fe" emoji="📦" />
      </div>

      <div style={styles.cardRow}>
        <Card title="Today’s Credit" value={summary.todayCredits} color="#fef9c3" emoji="🟢" />
        <Card title="Today’s Debit" value={summary.todayDebits} color="#fde68a" emoji="🔴" />
      </div>
    </div>
  );
};

const Card = ({ title, value, color, emoji }) => (
  <div style={{ ...styles.card, background: color }}>
    <h3>{emoji} {title}</h3>
    <p style={styles.value}>{value}</p>
  </div>
);

const styles = {
  container: { padding: "30px" },
  header: { fontSize: "2rem", marginBottom: "20px", color: "#1e3a8a" },
  cardRow: { display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" },
  card: {
    flex: "1",
    minWidth: "200px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },
  value: { fontSize: "1.8rem", fontWeight: "bold" }
};

export default DashboardPage;
