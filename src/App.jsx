import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import UserContext from "./contexts/UserContext";
import TodayScreen from "./components/TodayScreen";

import { Reset } from "./global-styles/Reset";
import { GlobalStyle } from "./global-styles/GlobalStyle";

export default function App() {
  const [userInfo, SetUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  console.log(userInfo);

  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <UserContext.Provider value={{ userInfo, SetUserInfo }}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<RegisterScreen />} />
          <Route path="/hoje" element={<TodayScreen />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
