import { useMemo, useState } from "react";
import "./App.css";

const hardCalculate = (number) => {
  console.log("어려운계산");
  for (let i = 0; i < 999999; i++) {}
  return number + 100000;
};

const easyCalulate = (number) => {
  console.log("쉬운계산기");
  return number + 1;
};

function UseMemo() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = easyCalulate(easyNumber);
  return (
    <div className="App">
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 100000 = {hardSum}</span>

      <div>
        <h3>쉬운 계산기</h3>
        <input
          type="number"
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <span> + 1 = {easySum}</span>
      </div>
    </div>
  );
}

export default UseMemo;
