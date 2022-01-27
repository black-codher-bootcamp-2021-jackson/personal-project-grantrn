import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../components/Profile";
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";

const MyRoutes = () => {
  const { user, isFetching, error, dispatch } = useContext(AuthContext); //returns current context value. determined by value prop of AuthContext.Provider
  console.log(user);
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route exact path="/"
        {user ? <Home /> : <Register />} /> */}
        <Route path="/login" element={<Login />} /> //have home as login maybe
        <Route path="/register" element={<Register />} />
        {user&&<Route path="/profile/:id" element={<Home />} />}
      </Routes>
    </Router>
  );
};

export default MyRoutes;
