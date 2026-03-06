import { useState } from "react";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from "./Pages/LoginPage.jsx";
import { RegisterPage } from "./Pages/RegisterPage.jsx";
import { AdminPage } from "./Pages/AdminPage.jsx";

import { Header } from "./components/header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
