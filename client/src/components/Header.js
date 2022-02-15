import { AuthContext } from "../context/AuthContext";
import { useState, useContext, useEffect } from "react";
import Search from "./Search";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h2 className="welcome">
        <em>Better</em>Reads
      </h2>
      <p className="home">Home &nbsp;&nbsp; Explore&nbsp;&nbsp; Community</p>
    </>
  );
};

export default Header;
