import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";
import BookList from "./BookApi";

const Profile = ({ addToRead, addToCurrently }) => {
  const { user } = useContext(AuthContext);
  const [cBooks, setcBooks] = useState([]); //curently rading
  const [readBooks, setReadBooks] = useState([]); //read
  const [wantRead, setWantRead] = useState([]);

  useEffect(() => {
    setcBooks(user.user.currentBooks);
  }, []);

  useEffect(() => {
    setReadBooks(user.user.read);
  }, []);

  useEffect(() => {
    setWantRead(user.user.wantToRead);
  }, []);

  //update arrays on client side
  const profileRead = (book) => {
    setReadBooks((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    setcBooks(cBooks.filter((item) => item !== book));
  }; //add on client side
  // filter from currentBooks to remove
  const profileCurrent = (book) => {
    setcBooks((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    // setBooks(books.filter((item) => item !== book));
  };
  // <BookList profileRead={profileRead} profileCurrent={profileCurrent} />;
  const display = true;

  return (
    <>
      <h4 className="subtitle">Currently Reading</h4>
      <div className="list">
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
              />
            </div>
          ))
        ) : (
          <p className="empty">No items found...</p>
        )}
      </div>

      <h4 className="subtitle">Want to Read</h4>
      <div className="list">
        {wantRead.length !== 0 ? (
          wantRead.map((book) => (
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
