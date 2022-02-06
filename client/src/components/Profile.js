import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";
import BookList from "./BookApi";

const Profile = ({ addToRead, addToCurrently, options, deleteCurrently }) => {
  const { user } = useContext(AuthContext);

  const {
    cBooks,
    profileRead,
    wantRead,
    readBooks,
    setcBooks,
    setReadBooks,
    setWantRead,
    profileCurrent2,
  } = options;
  // <BookList profileRead={profileRead} profileCurrent={profileCurrent} />;
  const display = true;
  console.log(cBooks);
  useEffect(() => {
    console.log("use effect currently reading");
    cBooks && setcBooks(user.user.currentBooks);
  }, []);

  useEffect(() => {
    readBooks && setReadBooks(user.user.read);
  }, []);

  useEffect(() => {
    wantRead && setWantRead(user.user.wantToRead);
  }, []);

  return (
    <>
      <div className="list">
        <h4 className="subtitle">Currently Reading</h4>
        {cBooks.length !== 0 ? (
          cBooks.map((book) => (
            <div>
              <Book
                key={book.id}
                book={book}
                title={book.volumeInfo.title}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                addToRead={addToRead}
                profileRead={profileRead}
                deleteCurrently={deleteCurrently}
                location="currently"
              />
            </div>
          ))
        ) : (
          <p className="empty">No items found...</p>
        )}
      </div>

      <div className="list-want">
        <h4 className="subtitle">Want to Read</h4>
        {wantRead.length !== 0 ? (
          wantRead.map((book) => (
            <div>
              <Book
                key={book.id}
                book={book}
                title={book.volumeInfo.title}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                addToCurrently={addToCurrently}
                profileCurrent2={profileCurrent2}
                location="want"
              />
            </div>
          ))
        ) : (
          <p className="empty">No items found...</p>
        )}
      </div>

      <div className="list-read">
        <h4 className="subtitle">Read</h4>
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
      <div className="readStats">
        <h4 className="subtitle">Read stats</h4>
      </div>
    </>
  );
};

export default Profile;
