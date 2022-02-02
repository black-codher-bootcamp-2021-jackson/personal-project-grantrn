import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";

const Profile = ({ addToRead, addToCurrently }) => {
  const { user } = useContext(AuthContext);
  const display = true;

  return (
    <>
      <h4 className="subtitle">Currently Reading</h4>
      <div className="list">
        {user.currentBooks.map((book) => (
          <div>
            <Book
              key={book.id}
              book={book}
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
            <Book
              key={book.id}
              book={book}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              addToCurrently={addToCurrently}
            />
          </div>
        ))}
      </div>
      <h4 className="subtitle">Read</h4>
      <div className="list-read">
        {user.read.map((book) => (
          <div>
            <Book
              key={book.id}
              book={book}
              title={book.volumeInfo.title}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              display={display}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
