import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./components/LoginScreen";

import { Reset } from "./global-styles/Reset";
import { GlobalStyle } from "./global-styles/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
