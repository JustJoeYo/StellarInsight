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
  PrivateRoutes,
  GamePages,
  GameStatPages,
  PageNotFound,
} from "./pages/types";
import { GamesArray } from "./data/data";
import AppContextProviders from "./contexts/AppContextProvider";
import { PlayerIDProvider } from "./contexts/PlayerIDProvider";
import { PlayerIDContext } from "./contexts/PlayerIDContext";
import { useContext } from "react";

export default function App() {
  const providers = [PlayerIDProvider];
  const { playerID } = useContext(PlayerIDContext);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Router>
        <AppContextProviders components={providers}>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {GamesArray.map((game) => (
                <Route
                  key={game.name}
                  path={`/game/${game.name.toLowerCase().replace(/\s+/g, "-")}`}
                  element={<GamePages />}
                />
              ))}
              {GamesArray.map((game) => (
                <Route
                  key={game.name}
                  path={`/game/${game.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/stats/${playerID}`}
                  element={<GameStatPages />}
                />
              ))}
            </Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/tos" element={<TOS />} />
            <Route path="/support" element={<Support />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </AppContextProviders>
      </Router>
    </div>
  );
}
