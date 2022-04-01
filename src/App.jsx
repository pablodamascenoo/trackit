import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import UserContext from "./contexts/UserContext";
import PercentContext from "./contexts/PercentContext";
import TodayScreen from "./components/TodayScreen";

import { Reset } from "./global-styles/Reset";
import { GlobalStyle } from "./global-styles/GlobalStyle";

export default function App() {
  const [userInfo, SetUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );
  const [percent, SetPercent] = useState(0);

  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <UserContext.Provider value={{ userInfo, SetUserInfo }}>
        <PercentContext.Provider value={{ percent, SetPercent }}>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/cadastro" element={<RegisterScreen />} />
            <Route path="/hoje" element={<TodayScreen />} />
          </Routes>
        </PercentContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
