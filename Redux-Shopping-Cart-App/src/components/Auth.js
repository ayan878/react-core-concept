import React from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(true));
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
        <button className="login-btn" type="submit" onClick={loginWithRedirect}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
