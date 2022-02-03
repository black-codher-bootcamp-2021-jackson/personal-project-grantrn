import { React, useRef, useContext } from "react";
// import "./register.css";
import axios from "axios";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const username = useRef(); // preserves data during render cycle, like useState but doesnt have updater func
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/users/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  // loginCall(
  //   { email: email.current.value, password: password.current.value },
  //   dispatch
  // );

  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="logo">
              <em>Better</em>Reads
            </h3>
            <span className="loginDesc">Reading made simple.</span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleClick}>
              <button className="loginRegisterButton">Log in</button>
              <input
                placeholder="Username"
                required
                ref={username}
                className="loginInput"
              />
              <input
                placeholder="Email"
                required
                ref={email}
                className="loginInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                className="loginInput"
                type="password"
                minLength="5"
              />
              <input
                placeholder="Password again"
                required
                ref={passwordAgain}
                className="loginInput"
                type="password"
              />
              <button className="loginButton" type="submit">
                Sign up
              </button>
              <span className="loginForgot">Forgot Password?</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
