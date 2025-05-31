import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import React from "react";

const ExportButton = ({ data, type }) => {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `${type}Transactions`);
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, `${type}_transactions.xlsx`);
  };

  return (
    <button onClick={exportToExcel} style={styles.button}>
      📤 Export {type} to Excel
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#4ade80",
    color: "black",
    border: "none",
    padding: "10px 15px",
    margin: "10px 0",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default ExportButton;
