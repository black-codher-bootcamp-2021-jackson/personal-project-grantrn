import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Search from "./Search";
import Booklist from "./BookApi";
import Test from "./Test";

const MyRoutes = ({
  findBooks,
  books,
  addToCurrently,
  addToRead,
  addToWant,
}) => {
  const { user } = useContext(AuthContext); //returns current context value. determined by value prop of AuthContext.Provider
  console.log("routes", user);
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Test />} />  */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {user !== null && (
          <Route
            path="/"
            element={
              <>
                <Home
                  addToRead={addToRead}
                  findBooks={findBooks}
                  addToCurrently={addToCurrently}
                />
              </>
            }
          />
        )}
        <Route
          path="/search"
          element={
            <Booklist
              books={books}
              addToCurrently={addToCurrently}
              addToWant={addToWant}
              addToRead={addToRead}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
