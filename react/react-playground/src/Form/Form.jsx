import { use, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <input type="textarea" value={comment} onChange={handleCommentChange} />
      <p>Comment: {comment}</p>

      <select onChange={handlePaymentChange}>
        <option value="">Select Payment Method</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment Method: {payment}</p>

      <label>
        <input
          type="radio"
          name="shipping"
          value="Pick Up"
          onChange={handleShippingChange}
          checked={shipping === "Pick Up"}
        />
        Pick Up
      </label>
      <label>
        <input
          type="radio"
          name="shipping"
          value="Delivery"
          onChange={handleShippingChange}
          checked={shipping === "Delivery"}
        />
        Delivery
      </label>
      <p>Shipping Method: {shipping}</p>
    </>
  );
}

export default Form;

/* 
Name
Quantity
Comment
Payment Method
Shipping Method
*/
