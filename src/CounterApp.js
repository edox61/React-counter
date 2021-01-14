import React, { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incre = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Clicks {counter} </h1>
      <button onClick={incre}> Incrementar</button>
    </div>
  );
};
export default CounterApp;
