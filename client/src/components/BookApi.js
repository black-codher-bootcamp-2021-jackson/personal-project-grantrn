import { React, useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";
import { useNavigate, Navigate, Link } from "react-router";

const BookList = ({ books, addToCurrently, addToWant, addToRead }) => {
  function GoBack() {
    const navigate = useNavigate();
    function handleClick() {
      navigate("/");
    }
    return (
      <div>
        <button onClick={handleClick}>Go Back</button>
      </div>
    );
  }

  return (
    <>
      <div>{GoBack()}</div>

      <div className="list">
        <div>
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              addToCurrently={addToCurrently}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              addToWant={addToWant}
              addToRead={addToRead}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
