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
    <div className="book">
      <img src={thumbnail} alt={title} />
      <div>
        <h2 title={title}></h2>
        <p className="author">
          by {authors ? authors.join(", ") : "No Authors Listed"}
        </p>

        <p className="description">
          {description}
          {/* {description ? description : "No description"} */}
        </p>
      </div>
      <div>
        {addToCurrently ? (
          <>
            <button className="add-button" onClick={() => addToCurrently(book)}>
              Add to currently reading
            </button>
            <button onClick={() => addToWant(book)}>Add to want to read</button>
          </>
        ) : (
          <button onClick={() => addToRead(book)}>Add to Read </button>
        )}
      </div>
    </div>
  );
};

export default Book;
