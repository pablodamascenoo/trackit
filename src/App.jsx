import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import UserContext from "./contexts/UserContext";

import { Reset } from "./global-styles/Reset";
import { GlobalStyle } from "./global-styles/GlobalStyle";

export default function App() {
  const [token, SetToken] = useState(JSON.parse(localStorage.getItem("token")));

  console.log(token);

  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <UserContext.Provider value={{ token, SetToken }}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/cadastro" element={<RegisterScreen />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
