import { React, useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";
import { useNavigate, Navigate, Link } from "react-router";

const BookList = ({ books, addToCurrently, addToWant, addToRead, options }) => {
  const { profileCurrent, profileRead, profileWant } = options;

  function GoBack() {
    const navigate = useNavigate();
    function handleClick() {
      navigate(-1);
    }
    return (
      <div>
        <button className="back" onClick={handleClick}>
          Go Back
        </button>
      </div>
    );
  }
  console.log(books);

  return (
    <>
      <div>{GoBack()}</div>

      <div className="list">
        <div>
          {books.map((book) => {
            const { title, authors, imageLinks, description } = book.volumeInfo;

            let thumbnail = imageLinks
              ? imageLinks.thumbnail || imageLinks.smallThumbnail
              : "no picture found"; // <img src={logo} />
            return (
              <Book
                key={book.id}
                book={book}
                addToCurrently={addToCurrently}
                title={title}
                thumbnail={thumbnail}
                authors={authors}
                description={description}
                addToWant={addToWant}
                addToRead={addToRead}
                profileCurrent={profileCurrent}
                profileWant={profileWant}
                profileRead={profileRead}
                location="results"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookList;
