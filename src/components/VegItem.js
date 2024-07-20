import React, { useState } from "react";

const VegItem = ({ veg, index, deleteVeg, buyVeg }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <span>
        {veg.name} RS: {veg.price} {veg.quantity}KG{" "}
      </span>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount");
            return;
          }
          buyVeg(index, amount);
        }}
      >
        Buy
      </button>
      <button onClick={() => deleteVeg(index)}>Delete</button>
    </div>
  );
};

export default VegItem;
