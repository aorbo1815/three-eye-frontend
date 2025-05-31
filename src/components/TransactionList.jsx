const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");
import React, { useEffect, useState } from "react";
import axios from "axios";

const TransactionList = ({ type }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState({});

  useEffect(() => {
    fetchData();
    if (type === "credit") fetchBalance();
  }, [type]);

  const fetchData = async () => {
  let url = `http://localhost:5000/api/transactions/${type}s`;
  if (fromDate && toDate) {
    url += `?from=${fromDate}&to=${toDate}`;
  }
  const res = await axios.get(url);
  setTransactions(res.data);
};


  const fetchBalance = async () => {
  const res = await axios.get(`http://localhost:5000/api/transactions/balance`);
    setBalance(res.data);
  };
 const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      const url = `http://localhost:5000/api/transactions/${type}/${id}`;
      await axios.delete(url, {
        data: { userId: localStorage.getItem("userId") }
      });
      fetchData(); // Refresh list after deletion
    } catch (err) {
      alert("Delete failed or unauthorized");
    }
  };
  return (
    <div style={{ marginBottom: "20px" }}>
  <label>From: </label>
  <input
    type="date"
    value={fromDate}
    onChange={(e) => setFromDate(e.target.value)}
    style={styles.input}
  />
  <label style={{ marginLeft: "10px" }}>To: </label>
  <input
    type="date"
    value={toDate}
    onChange={(e) => setToDate(e.target.value)}
    style={styles.input}
  />
  <button
    onClick={fetchData}
    style={{
      ...styles.button,
      marginLeft: "10px",
      background: "#0ea5e9"
    }}
  >
    Filter
  </button>
</div>

      )}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Slip No</th>
            <th>Cause</th>
            <th>To</th>
            <th>By</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
{transactions.map((t) => (
    <tr key={t._id}>
      <td>{t.slipNo}</td>
      <td>{t.cause}</td>
      <td>{t.toWhom}</td>
      <td>{t.byWhom}</td>
      <td>{t.amount}</td>
      <td>{new Date(t.date).toLocaleString()}</td>
      {localStorage.getItem("role") === "admin" && (
        <td>
          <button
            onClick={() => handleDelete(t._id)}
            style={{ background: "red", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px" }}
          >
            Delete
          </button>
        </td>
      )}
    </tr>
  ))}
</tbody>

      </table>
import ExportButton from "./ExportButton";
<ExportButton data={transactions} type={type} />

const styles = {
  container: { padding: "20px" },
  title: { fontSize: "1.5rem", color: "#1e3a8a" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px"
  },
  balanceBox: {
    background: "#ecfdf5",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px"
  }
};

export default TransactionList;
