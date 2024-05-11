import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/types";

export default function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<>Login not deved yet</>} />
          <Route path="/register" element={<>Register not deved yet</>} />
        </Routes>
      </Router>
    </div>
  );
}
