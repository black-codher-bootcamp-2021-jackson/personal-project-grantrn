import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";
import Header from "./Header";

const Profile = ({ addToRead }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
    
      {/* <span>i am {user.username}'s profile page</span> */}
      <h4 className="subtitle">Currently Reading</h4>
      <div className="list">
        {user.currentBooks.map((book) => (
          <div>
            {/* <p>{book.title}</p> */}
            {/* <p>{book.volumeInfo.publisher}</p> */}
            <Book
              key={book.id}
              book={book}
              // addToCurrently={addToCurrently}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              
              addToRead={addToRead}
            />
          </div>
        ))}
      </div>
      <h4 className="subtitle">Want To Read</h4>
      <div className="list">
        {user.wantToRead.map((book) => (
          <div>
            {/* <p>{book.title}</p> */}
            {/* <p>{book.volumeInfo.publisher}</p> */}

            <Book
              key={book.id}
              book={book}
              // addToCurrently={addToCurrently}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
            
              addToRead={addToRead}
            />
          </div>
        ))}
      </div>
      <h4 className="subtitle">Read</h4>
      <div className="list">
        {user.read.map((book) => (
          <div>
            {/* <p>{book.title}</p> */}
            {/* <p>{book.volumeInfo.publisher}</p> */}

            <Book
              key={book.id}
              book={book}
              // addToCurrently={addToCurrently}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
             
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
