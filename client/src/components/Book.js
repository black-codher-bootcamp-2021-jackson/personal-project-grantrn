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
  display,
  profileRead,
  profileCurrent,
  deleteCurrently,
}) => {
  return (
    <div className="container">
      <div>
        <img src={thumbnail} alt={title} className="thumbnail" />
        <div>
          <h2 title={title}></h2>
          <p className="author">{authors}</p>

          <p className="description">{description}</p>
        </div>

        {!display && (
          <div className="dropdown">
            <button className="dropbtn">Options</button>
            <div className="dropdown-content">
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
                  deleteCurrently(book);
                }}
              >
                Delete
              </button>
              <button className="button" onClick={() => addToWant(book)}>
                Add to want to read
              </button>
              <button
                className="button"
                onClick={() => {
                  addToRead(book);
                  profileRead(book);
                }}
              >
                Add to Read{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
