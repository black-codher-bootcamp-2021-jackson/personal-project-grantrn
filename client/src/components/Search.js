import React from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    console.log("i am submitting");
    event.preventDefault();
    props.findBooks(props.keyword);
    navigate("/search")
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <label>
          Book name:
          <input
            value={props.keyword}
            onChange={(e) => props.setKeyword(e.target.value)}
          />
          <input type="submit" />
        </label>
      </form>
    </div>
  );
};
export default Search;
