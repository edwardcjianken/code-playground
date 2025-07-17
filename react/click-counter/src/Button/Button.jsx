import { useState } from "react";

function Button() {
  const [clickCount, setClickCount] = useState(0);
  const [name, setName] = useState("Guest");
  const [isEmployed, setIsEmployed] = useState(false);

  const incrementCount = () => {
    setClickCount(clickCount + 1);
  };

  const showNameEvent = () => setName("Edward Chia");

  const toggleEmploymentStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <button onDoubleClick={showNameEvent}>Show Name</button>
      <button onDoubleClick={toggleEmploymentStatus}>
        <button onClick={incrementCount}>Click me!</button>
        <p>You clicked {clickCount} times.</p>
        <p>Your name: {name}</p>
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        Show Employment Status
      </button>
    </>
  );
}

export default Button;
