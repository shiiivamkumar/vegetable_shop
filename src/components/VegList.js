import React from "react";
import VegItem from "./VegItem";

const VegList = ({ veggies, deleteVeg, buyVeg }) => {
  return (
    <div>
      {veggies.map((veg, index) => (
        <VegItem
          key={index}
          index={index}
          veg={veg}
          deleteVeg={deleteVeg}
          buyVeg={buyVeg}
        />
      ))}
    </div>
  );
};

export default VegList;
