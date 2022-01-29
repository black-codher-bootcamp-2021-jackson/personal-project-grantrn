import React from "react";
import Book from "./Book";

const BookList = ({ books, addToCurrently}) => {

  return (
    <div className="list">
      <div>
        {books.map((book) => (
          <Book key={book.id} book={book} addToCurrently={addToCurrently}/>
        ))}
      </div>
    </div>
  );
};

export default BookList;
