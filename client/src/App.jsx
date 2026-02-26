import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p className="text-2xl font-bold text-center">welcome to my app</p>
      </div>
    </>
  );
}

export default App;
