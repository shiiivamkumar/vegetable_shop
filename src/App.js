import React, { useState, useEffect } from "react";
import VegList from "./components/VegList";
import "./App.css";

const App = () => {
  const [veggies, setVeggies] = useState(() => {
    const storedVeggies = localStorage.getItem("veggies");
    return storedVeggies ? JSON.parse(storedVeggies) : [];
  });
  useEffect(() => {
    localStorage.setItem("veggies", JSON.stringify(veggies));
  }, [veggies]);

  const addVeg = (name, price, quantity) => {
    if (veggies.some((veg) => veg.name === name)) {
      alert("Vegetable already exists!");
      return;
    }

    setVeggies([...veggies, { name, price, quantity }]);
  };

  const deleteVeg = (index) => {
    setVeggies(veggies.filter((_, i) => i !== index));
  };

  const buyVeg = (index, amount) => {
    const newVeggies = [...veggies];
    if (newVeggies[index].quantity >= amount) {
      newVeggies[index].quantity -= amount;
      setVeggies(newVeggies);
    } else {
      alert("Not enough quantity available");
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>VEG SHOP</h1>
      </header>
      <div>
        <input type="text" placeholder="Ex_POTATO" id="name" />
      </div>
      <div>
        <input type="number" placeholder="PER KG PRICE" id="price" />
      </div>
      <div>
        <input
          type="number"
          placeholder="TOTAL KILOS OF VEGGIES"
          id="quantity"
        />
      </div>
      <button
        onClick={() => {
          const name = document.getElementById("name").value;
          const price = parseFloat(document.getElementById("price").value);
          const quantity = parseInt(document.getElementById("quantity").value);

          if (!name || isNaN(price) || isNaN(quantity) || quantity <= 0) {
            alert("Please enter valid inputs");
            return;
          }

          addVeg(name, price, quantity);
        }}
      >
        ADD TO SHOP
      </button>
      <VegList veggies={veggies} deleteVeg={deleteVeg} buyVeg={buyVeg} />
      <h2>Total: {veggies.length}</h2>
    </div>
  );
};

export default App;
