import React from "react";

const Book = ({ book, addToCurrently }) => {
  //Nested Destructuring
  const {
    id,
    volumeInfo: {
      title,
      authors,
      description,
      imageLinks: { thumbnail },
    },
  } = book;

  return (
    <div className="book">
      <img src={thumbnail} alt={title} />
      <div>
        <h2 title={title}></h2>
        <p className="author">
          by {authors ? authors.join(", ") : "No Authors Listed"}
        </p>

        <p className="description">
          {description ? description : "No description"}
        </p>
      </div>
      <div>
        <button className="add-button" onClick={() => addToCurrently(book)}>
          Add to currently reading
        </button>
      </div>
    </div>
  );
};

export default Book;
