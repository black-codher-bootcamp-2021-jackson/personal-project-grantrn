import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login";

const MyRoutes = ({}) => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/home" /> */}
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
