import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Booklist from "./BookApi";

const MyRoutes = ({
  findBooks,
  books,
  addToCurrently,
  addToRead,
  addToWant,
  options,
  deleteCurrently,
  deleteRead,
  deleteWant,
}) => {
  const { user } = useContext(AuthContext); //returns current context value. determined by value prop of AuthContext.Provider

  console.log("routes", user);
  return (
    <Router>
      <Routes>
        {user === null && <Route path="/" element={<Login />} />}
        {/* <Route path="/login" element={<Login />} /> */}
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
                  options={options}
                  deleteCurrently={deleteCurrently}
                  deleteWant={deleteWant}
                  deleteRead={deleteRead}
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
              options={options}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
