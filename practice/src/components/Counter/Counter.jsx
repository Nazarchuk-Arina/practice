import { useEffect, useState } from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("counter was mounted");
  }, []);

  useEffect(() => {
    console.log(`counter was changed / cur counter is ${counter} `);
  }, [counter]);

  const handlePlusClick = () => {
    //   setCounter(counter + 1);
    setCounter((prev) => prev + step);
  };

  const handleMinusClick = () => {
    setCounter((prev) => prev - step);
  };

  const handleReset = () => {
    setCounter(0);
    setStep(0);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          onChange={(e) => {
            setStep(+e.target.value);
          }}
        />
        <div className={s.flex}>
          <button className="btn" onClick={handleMinusClick}>
            minus
          </button>
          <button className="btn" onClick={handleReset}>
            reset
          </button>
          <button className="btn" onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
