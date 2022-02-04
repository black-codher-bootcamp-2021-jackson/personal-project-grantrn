import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";

const Profile = ({
  addToRead,
  addToCurrently,
  cbooks,
  readBooks,
  profileRead,
}) => {
  const { user } = useContext(AuthContext);

  const display = true;
  console.log(user);
  console.log(user.user.currentBooks);

  return (
    <>
      <h4 className="subtitle">Currently Reading</h4>
      <div className="list">
        {cbooks.length !== 0 ? (
          cbooks.map((book) => (
            <div>
              <Book
                key={book.id}
                book={book}
                title={book.volumeInfo.title}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                addToRead={addToRead}
                profileRead={profileRead}
              />
            </div>
          ))
        ) : (
          <p className="empty">No items found...</p>
        )}
      </div>

      <h4 className="subtitle">Want to Read</h4>
      <div className="list">
        {user.user.wantToRead.length !== 0 ? (
          user.user.wantToRead.map((book) => (
            <div>
              <Book
                key={book.id}
                book={book}
                title={book.volumeInfo.title}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                addToCurrently={addToCurrently}
              />
            </div>
          ))
        ) : (
          <p className="empty">No items found...</p>
        )}
      </div>

      <h4 className="subtitle">Read</h4>
      <div className="list-read">
        {readBooks.length !== 0 ? (
          readBooks.map((book) => (
            <div>
              <Book
                key={book.id}
                book={book}
                title={book.volumeInfo.title}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                display={display}
              />
            </div>
          ))
        ) : (
          <p className="empty">No items found...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
