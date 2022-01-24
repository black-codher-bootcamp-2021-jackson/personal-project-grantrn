import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router, Navigate
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";


const MyRoutes = ({ user }) => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        {/* <Route exact path="/"
        {user ? <Home /> : <Register />} />
        <Route path="/login" {user? <Navigate to="/" /> : <Login />}/>
        <Route path="/register"
          {user ? <Navigate to="/" /> : <Register />}/> */}

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
