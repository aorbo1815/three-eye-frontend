import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    alert("You’ve been logged out.");
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Logout;
