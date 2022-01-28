import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Search from "./Search";
import Booklist from "./BookApi";

const MyRoutes = ({ findBooks, books }) => {
  const { user } = useContext(AuthContext); //returns current context value. determined by value prop of AuthContext.Provider
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> //have home as login maybe
        <Route path="/register" element={<Register />} />
        {user && (
          <Route
            path="/profile/:id"
            element={
              <>
                <Home />
                <Search findBooks={findBooks} />
              </>
            }
          />
        )}
        <Route path="/search" element={<Booklist books={books} />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
