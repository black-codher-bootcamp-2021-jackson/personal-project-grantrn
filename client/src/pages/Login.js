import { React, useRef, useContext, useEffect } from "react";
import "./login.css";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const email = useRef(); // preserves data during render cycle, like useState but doesnt have updater func
  const password = useRef();
  const navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext); //returns current context value. determined by value prop of AuthContext.Provider

  const handleClick = async (e) => {
    e.preventDefault(); //stops from submitting form
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(isFetching);
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  console.log(email);
  console.log(user);
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
              <button className="loginRegisterButton">Sign up</button>
              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
                ref={email}
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength="5"
                className="loginInput"
                ref={password}
              />
              <button className="loginButton" type="submit">
                {isFetching ? "Please Wait..." : "Log In"}
              </button>
              <span className="loginForgot">Forgot Password?</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
