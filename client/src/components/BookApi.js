import React from "react";
import Book from "./Book";


const BookList = ({ books}) => {
  return (
    <div className="list">
      <div>
        {books.map((book) => (
          <Book key={book.id} book={book}  />
        ))}
      </div>
    </div>
  );
};

export default BookList;
