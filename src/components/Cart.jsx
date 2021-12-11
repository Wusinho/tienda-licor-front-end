import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <div>Cart Items</div>
      {cartItems.length === 0 ? (
        <div>No items are added</div>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Add/Remove</th>
              <th scope="col">Quantity</th>
              <th scope="col">Discount</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <button className="btn btn-primary mx-2">Add</button>
                  <button className="btn btn-primary">Remove</button>
                </td>
                <td>{item.quantity}</td>
                <td>{item.discount}</td>
                <td>{item.price}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
