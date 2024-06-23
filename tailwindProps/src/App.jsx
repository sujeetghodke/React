import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl">Tailwind </h1>
      <Card name="DELL" btn="Click me" />
      <Card name="HP" btn="READ me" />
    </>
  );
}

export default App;
