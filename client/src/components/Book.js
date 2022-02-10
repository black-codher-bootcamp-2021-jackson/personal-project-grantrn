import React from "react";

const Book = ({
  book,
  addToCurrently,
  title,
  authors,
  thumbnail,
  description,
  addToRead,
  addToWant,
  profileRead,
  profileCurrent,
  profileCurrent2,
  profileWant,
  deleteCurrently, //serverside
  deleteWant,
  deleteRead,
  deleteProfileCurrent,
  deleteProfileRead,
  deleteProfileWant,
  location,
}) => {
  return (
    <div className="container">
      <div className="individualBook">
        {thumbnail !== "no picture found" ? (
          <img src={thumbnail} alt={title} className="thumbnail" />
        ) : (
          <p>{thumbnail}</p>
        )}
        <div>
          <h2 title={title}></h2>
          <p className="author">{authors}</p>

          <p className="description">{description}</p>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Options</button>
          <div className="dropdown-content">
            {location === "currently" && (
              <>
                <button
                  className="button"
                  onClick={() => {
                    addToRead(book);
                    profileRead(book);
                  }}
                >
                  Add to Read{" "}
                </button>
                <button
                  className="button"
                  onClick={() => {
                    deleteCurrently(book);
                    deleteProfileCurrent(book);
                  }}
                >
                  Delete
                </button>
              </>
            )}
            {location === "want" && (
              <>
                <button
                  className="button"
                  onClick={() => {
                    addToCurrently(book);
                    profileCurrent2(book);
                  }}
                >
                  Add to currently reading
                </button>
                <button
                  className="button"
                  onClick={() => {
                    deleteWant(book);
                    deleteProfileWant(book);
                  }}
                >
                  Delete
                </button>
              </>
            )}
            {location === "read" && (
              <>
                <button
                  className="button"
                  onClick={() => {
                    deleteRead(book);
                    deleteProfileRead(book);
                  }}
                >
                  Delete
                </button>
              </>
            )}
            {location === "results" && (
              <>
                <button
                  className="button"
                  onClick={() => {
                    addToCurrently(book);
                    profileCurrent(book);
                  }}
                >
                  Add to currently reading
                </button>
                <button
                  className="button"
                  onClick={() => {
                    addToWant(book);
                    profileWant(book);
                  }}
                >
                  Add to want to read
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
