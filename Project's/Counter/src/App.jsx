import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCounter] = useState(10);

  //let count = 5;
  let addValue = () => {
    count += 1;
    setCounter(count);
    // console.log(count);
    // console.log("Value Added", Math.random());
    if (setCounter(count) <= 20) {
      return;
    }
  };

  let rmValue = () => {
    // count = count - 1;
    setCounter(count - 1);
  };

  return (
    <>
      <h1>Simple Project</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>Adding Value {count}</button>
      <br /> <br />
      <button onClick={rmValue}>Remove Value {count}</button>
    </>
  );
}

export default App;
