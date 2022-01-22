import React from "react";
import "./login.css";
const Login = () => {
  return (
    <>
      
     
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="logo"><em>Better</em>Reads</h3>
          <span className="loginDesc">
            Reading made simple.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <button className="loginRegisterButton">
              Sign up
            </button>
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            
          </div>
        </div>
      </div>
    </div>
    </>)
};

export default Login;
