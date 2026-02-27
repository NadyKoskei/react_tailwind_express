import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Button } from "./components/button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p className="text-2xl font-bold text-center">welcome to my app</p>
      </div>

      <Button message="Click Me!" />
      <Button message="Submit" />
      <Button message="Send message" />
    </>
  );
}

export default App;
