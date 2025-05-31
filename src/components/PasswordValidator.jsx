import React from "react";

const PasswordValidator = ({ password }) => {
  const checks = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "Includes lowercase (a-z)", valid: /[a-z]/.test(password) },
    { label: "Includes uppercase (A-Z)", valid: /[A-Z]/.test(password) },
    { label: "Includes number (0-9)", valid: /[0-9]/.test(password) },
    { label: "Includes special character", valid: /[!@#$%^&*]/.test(password) },
  ];

  return (
    <ul style={{ listStyle: "none", padding: 0, fontSize: "14px" }}>
      {checks.map((check, i) => (
        <li key={i} style={{ color: check.valid ? "green" : "red" }}>
          {check.valid ? "✔" : "✘"} {check.label}
        </li>
      ))}
    </ul>
  );
};

export default PasswordValidator;
