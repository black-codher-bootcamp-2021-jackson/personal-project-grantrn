import React from "react";

const Book = ({
  book,
  addToCurrently,
  title,
  authors,
  thumbnail,
  description,
  addToRead,
  addToWant
}) => {
  //Nested Destructuring, don't do it in book.js cos need to pass varibale into func
  // const {
  //   id,
  //   volumeInfo: {
  //     title,
  //     authors,
  //     description,
  //     imageLinks: { thumbnail },
  //   },
  // } = book;

  return (
    <div className="list">
      <img src={thumbnail} alt={title} className="thumbnail"/>
      <div>
        <h2 title={title}></h2>
        <p className="author">
          {authors}
        </p>

        <p className="description">
          {description}
          {/* {description ? description : "No description"} */}
        </p>
      </div>
      <div>
        {addToCurrently ? (
          <>
            <button className="button" onClick={() => addToCurrently(book)}>
              Add to currently reading
            </button>
            <button className="button" onClick={() => addToWant(book)}>Add to want to read</button>
          </>
        ) : (
          <button className="button"onClick={() => addToRead(book)}>Add to Read </button>
        )}
      </div>
    </div>
  );
};

export default Book;
