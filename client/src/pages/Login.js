import { React, useRef, useContext, useEffect } from "react";
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

  const signUp = () => {
    navigate("/register");
  };
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
            <form className="loginBox">
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
              <button
                className="loginButton"
                type="submit"
                onClick={handleClick}
              >
                {isFetching ? "Please Wait..." : "Log In"}
              </button>
              <button className="loginRegisterButton" onClick={signUp}>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
