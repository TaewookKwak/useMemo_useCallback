import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Box from "./box";
import Box2 from "./box2";
function UseCallback_2() {
  const [size, setSize] = useState(100);
  const [color, setColor] = useState("black");

  const createBoxStyle = useCallback(() => {
    return {
      background: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  const createBox2Style = useCallback(() => {
    return {
      backgroundColor: `${color}`,
      width: `100px`,
      height: `100px`,
    };
  }, [color]);

  return (
    <div className="App">
      <h2>UseCallback</h2>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setColor(color === "white" ? "black" : "white")}>
        색상변경
      </button>
      <Box createBoxStyle={createBoxStyle} />
      <Box2 createBox2Style={createBox2Style} />
    </div>
  );
}

export default UseCallback_2;
