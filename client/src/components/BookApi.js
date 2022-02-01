import { React, useEffect } from "react";
import Book from "./Book";
import { useNavigate, Navigate, Link } from "react-router";

const BookList = ({ books, addToCurrently, addToWant }) => {
  function GoBack() {
    const navigate = useNavigate();
    function handleClick() {
      navigate("/profile/:id");
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
      {/* <Navigate to="/profile/:id">About</Navigate> */}
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;
