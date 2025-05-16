import { useState } from "react";
import Styles from "./ClickCounter.module.css";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const decrementFive = () => {
    setCount(count - 5);
  };

  const decrementOne = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const incrementOne = () => {
    setCount(count + 1);
  };

  const incrementFive = () => {
    setCount(count + 5);
  };

  const changeButtonText = (e) => {
    e.target.textContent = "OUCH!";
  };

  const hideButton = (e) => {
    e.target.style.display = "none";
  };

  return (
    <>
      <div className={Styles.clickCounterContainer}>
        <p className={Styles.clickCounterDisplay}>{count}</p>
        <button className={Styles.clickCounterButton} onClick={decrementFive}>
          -5
        </button>
        <button className={Styles.clickCounterButton} onClick={decrementOne}>
          -1
        </button>
        <button className={Styles.clickCounterButton} onClick={reset}>
          Reset
        </button>
        <button className={Styles.clickCounterButton} onClick={incrementOne}>
          +1
        </button>
        <button className={Styles.clickCounterButton} onClick={incrementFive}>
          +5
        </button>
      </div>
      <div className="clickMeButtonContainer">
        <button
          className={Styles.clickMeButton}
          onClick={(e) => changeButtonText(e)}
          onDoubleClick={(e) => hideButton(e)}
        >
          Click Me!
        </button>
      </div>
    </>
  );
}

export default ClickCounter;
