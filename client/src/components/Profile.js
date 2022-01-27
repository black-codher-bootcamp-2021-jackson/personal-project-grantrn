import CurrentlyReading from "./CurrentlyReading";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import Help from "./Help";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const id = useParams().id;
  console.log(id);

  return (
    <>
      <span>i am {user.username}'s profile page</span>
      <span>i am {user.email}'s email address</span>
      <Help />
      {user.currentBooks.map((book) => (
        <p>{book.title}</p>
      ))}
    </>
  );
};

export default Profile;
