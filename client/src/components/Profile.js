import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";
import BookList from "./BookApi";

const Profile = ({
  addToRead,
  addToCurrently,
  options,
  deleteCurrently,
  deleteWant,
  deleteRead,
}) => {
  const {
    cBooks,
    profileRead,
    wantRead,
    readBooks,
    setcBooks,
    setReadBooks,
    setWantRead,
    profileCurrent2,
    deleteProfileCurrent,
    deleteProfileRead,
    deleteProfileWant,
  } = options;

  const { user } = useContext(AuthContext);
  console.log(cBooks);

  useEffect(() => {
    console.log("use effect currently reading");
    cBooks.length === 0 && setcBooks(user.user.currentBooks);
  }, []);

  useEffect(() => {
    readBooks.length === 0 && setReadBooks(user.user.read);
  }, []);

  useEffect(() => {
    wantRead.length === 0 && setWantRead(user.user.wantToRead);
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
                deleteProfileCurrent={deleteProfileCurrent}
                location="currently"
              />
            </div>
          ))
        ) : (
          <p className="empty">You currently aren't reading anything...</p>
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
                deleteWant={deleteWant}
                deleteProfileWant={deleteProfileWant}
                location="want"
              />
            </div>
          ))
        ) : (
          <p className="empty">You don't want to read any books...</p>
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
                deleteRead={deleteRead}
                deleteProfileRead={deleteProfileRead}
                location="read"
              />
            </div>
          ))
        ) : (
          <p className="empty">You haven't read anything...</p>
        )}
      </div>
      <div className="readStats">
        <h4 className="subtitle">Read stats</h4>
      </div>
    </>
  );
};

export default Profile;
