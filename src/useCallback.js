import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

function UseCallback() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);
  const someFunction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFucntion is changed");
  }, [someFunction]);

  return (
    <div className="App">
      <h2>UseCallback</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <hr />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default UseCallback;
