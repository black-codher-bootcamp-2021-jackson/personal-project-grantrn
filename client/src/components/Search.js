import React from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log("i am submitting");
    console.log(props.keyword);
    event.preventDefault();
    props.findBooks(props.keyword);
    navigate("/search");
  };
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Search a book name"
            value={props.keyword}
            onChange={(e) => props.setKeyword(e.target.value)}
            className="searchInput"
          />
          <input type="submit" />
        </label>
      </form>
    </div>
  );
};
export default Search;
