import React from "react";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
const Product = ({ name, id, imgURL, price }) => {
  const cartitem = useSelector((state) => state.cart.itemList);
  console.log(cartitem);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={() => dispatch(addToCart({name, id, price}))}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
