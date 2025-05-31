import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import CreditPage from "./pages/CreditPage";
import DebitPage from "./pages/DebitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

const LoginPage = () => <div>Login Page</div>;
const RegisterPage = () => <div>Register Page</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/credit" element={<CreditPage />} />
        <Route path="/debit" element={<DebitPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/credit" element={<ProtectedRoute><CreditPage /></ProtectedRoute>}/>
        <Route path="/debit" element={<ProtectedRoute><DebitPage /></ProtectedRoute>}/>
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;