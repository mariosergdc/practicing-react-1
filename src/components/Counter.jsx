import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "grey",
        paddingBottom: "1rem",
      }}
    >
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(0)}>reset</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
