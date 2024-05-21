import React from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

const Auth = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(true))
  };
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button
          className="login-btn"
          type="submit"
          onClick={""}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
