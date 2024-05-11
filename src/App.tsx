import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  Login,
  Register,
  About,
  PrivacyPolicy,
  TOS,
  Support,
  Dashboard,
  ForgotPassword,
} from "./pages/types";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/tos" element={<TOS />} />
          <Route path="/support" element={<Support />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}
