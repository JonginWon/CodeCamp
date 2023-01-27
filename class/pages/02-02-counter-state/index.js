import { useState } from "react";

const CounterSatePage = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onClickCountDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>UP</button>
      <button onClick={onClickCountDown}>DOWN</button>
    </>
  );
};

export default CounterSatePage;
