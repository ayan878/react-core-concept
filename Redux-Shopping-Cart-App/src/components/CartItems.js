import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = () => {

  const cartItems = useSelector((state) => state.cart.itemList);
  console.log(cartItems);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              total={item.totalPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
