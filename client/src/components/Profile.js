import CurrentlyReading from "./CurrentlyReading";
import axios from "axios";
import { useState, useEffect } from "react";
import Help from "./Help";
import { useParams } from "react-router";
import{AuthContext} from '../context/AuthContext'



const Profile = () => {
  const [user, setUser] = useState({}); 
  const [current, setCurrent] = useState([]);
  const id = useParams().id;
  console.log(id)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${id}`);
      setUser(res.data);
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchCurrent = async () => {
      const res = await axios.get(`/users/${id}/currently`);
      console.log(res.data);
      setCurrent(res.data);
      console.log(current);
    };

    fetchCurrent();
  }, [id]);
  console.log(Array.isArray(current));

  return (
    <>
      <span>i am {user.username}'s profile page</span>
      <span>i am {user.email}'s email address</span>
      <Help />
    </>
  );
};

export default Profile;
