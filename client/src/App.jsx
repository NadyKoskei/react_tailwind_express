import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

import { RegisterPage } from "./Pages/RegisterPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RegisterPage />
    </>
  );
}

export default App;
