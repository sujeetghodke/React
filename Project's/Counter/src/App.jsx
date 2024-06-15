import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCounter] = useState(0);

  //let count = 5;
  let addValue = () => {
    if (count < 10) {
      setCounter(count + 1);
    }
  };

  let rmValue = () => {
    if (count > 0) {
      setCounter(count - 1);
    }
  };

  return (
    <>
      <h1>Simple Project</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={addValue}>
        {count >= 10 ? "Limit Reached" : "Click me"}
      </button>
      {/* {count >= 10 ? "Limit Reached" : "Click me"} */}
      <br /> <br />
      <button onClick={rmValue}>
        {count > 0 ? "Click me" : "Limit Reached"}
      </button>
    </>
  );
}

export default App;
