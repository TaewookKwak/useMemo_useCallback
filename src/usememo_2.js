import { useEffect, useMemo, useState } from "react";
import "./App.css";

function UseMemo_2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div className="App">
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <hr />
      <h2>어느나라에서 왔어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기타자</button>
    </div>
  );
}

export default UseMemo_2;
