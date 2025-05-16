import { useState } from "react";

function RadioInput() {
  const [shipping, setShipping] = useState("");

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <label>
        <input
          type="radio"
          value="Pick Up"
          name="Shipping Option"
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          name="Shipping Option"
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <button onClick={() => setShipping("")}>Reset</button>
      <p>Shipping: {shipping}</p>
    </>
  );
}

export default RadioInput;
