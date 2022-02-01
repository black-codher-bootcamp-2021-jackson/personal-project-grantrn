import { AuthContext } from "../context/AuthContext";
import { useState, useContext, useEffect } from "react";
import Search from './Search'

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <h2 className="welcome">Welcome {user.username} </h2>
    </>
  );
};

export default Header;
