import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Book from "./Book";
// import { Doughnut } from "react-chartjs-2";
// import data from "./Test";

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

  useEffect(() => {
    console.log("use effect currently reading");
    cBooks.length === 0 && setcBooks(user.user.currentBooks);
    readBooks.length === 0 && setReadBooks(user.user.read);
    wantRead.length === 0 && setWantRead(user.user.wantToRead);
  }, []);

  const logout = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="list list-current">
        <h4 className="subtitle">Currently Reading</h4>
        {cBooks.length !== 0 ? (
          <div className="books-container">
            {cBooks.map((book) => (
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
            ))}
          </div>
        ) : (
          <p className="empty">You currently aren't reading anything...</p>
        )}
      </div>

      <div className="list list-want">
        <h4 className="subtitle">Want to Read</h4>

        {wantRead.length !== 0 ? (
          <div className="books-container">
            {wantRead.map((book) => (
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
            ))}
          </div>
        ) : (
          <p className="empty">You don't want to read any books...</p>
        )}
      </div>

      <div className="list list-read ">
        <h4 className="subtitle">Read</h4>

        {readBooks.length !== 0 ? (
          <div className="books-container">
            {readBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                title={book.volumeInfo.title}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                deleteRead={deleteRead}
                deleteProfileRead={deleteProfileRead}
                location="read"
              />
            ))}
          </div>
        ) : (
          <p className="empty">You haven't read anything...</p>
        )}
      </div>
      <div className=" readStats">
        <h4 className="subtitle">Read stats for {user.user.username}</h4>
        {/* <Doughnut data={data} /> */}
      </div>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Profile;
