import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <div>Cart Items</div>
      {cartItems.length === 0 && <div>No items are added</div>}
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
