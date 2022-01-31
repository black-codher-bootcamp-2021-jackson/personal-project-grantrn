import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";
import Header from "./Header";

const Profile = ({ addToRead }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <span>i am {user.username}'s profile page</span>

      <div className="currently reading">
        <h4>Currently Reading</h4>
        {user.currentBooks.map((book) => (
          <div>
            {/* <p>{book.title}</p> */}
            {/* <p>{book.volumeInfo.publisher}</p> */}

            <Book
              key={book.id}
              book={book}
              // addToCurrently={addToCurrently}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks} //how to get pic to show
              authors={book.volumeInfo.authors}
              addToRead={addToRead}
            />
          </div>
        ))}
      </div>
      <div className="want to read">
        <h4>Want To Read</h4>
        {user.wantToRead.map((book) => (
          <div>
            {/* <p>{book.title}</p> */}
            {/* <p>{book.volumeInfo.publisher}</p> */}

            <Book
              key={book.id}
              book={book}
              // addToCurrently={addToCurrently}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks} //how to get pic to show
              authors={book.volumeInfo.authors}
              addToRead={addToRead}
            />
          </div>
        ))}
      </div>
      <div className="Read">
        <h4>Read</h4>
        {user.read.map((book) => (
          <div>
            {/* <p>{book.title}</p> */}
            {/* <p>{book.volumeInfo.publisher}</p> */}

            <Book
              key={book.id}
              book={book}
              // addToCurrently={addToCurrently}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks} //how to get pic to show
              authors={book.volumeInfo.authors}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
