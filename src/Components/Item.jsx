import React from "react";

const Item = ({ itemMueble }) => {
 console.log(itemMueble)
  // const Item = ({ itemMueble: { elemento } }) => {
  // console.log(elemento)
  return (
    <div>
      <h4>Compra pendiente: {itemMueble.elemento}</h4>
      {/* <h4>Compra pendiente: {elemento}</h4> */}
    </div>
  );
};

export default Item;
