import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { showCartItem } from "../store/cartSlice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch=useDispatch()
  // const quantity = 5;
  return (
    <div className="cartIcon">
      <h3 onClick={()=>{dispatch(showCartItem(true))}}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
