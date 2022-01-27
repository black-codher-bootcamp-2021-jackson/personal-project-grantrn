import { useState, useEffect } from "react";
import axios from "axios";

const CurrentlyReading = () => {
  const [currently, setCurrently] = useState([]);

  useEffect(() => {
    const fetchCurrently = async () => {
      const res = await axios.get("/users/61eaa5b9f16a68e95fd91dd1/currently");
      console.log(res.data);
      setCurrently(res.data);
    };

    fetchCurrently();
  }, []);

  return (
    <>
      <div className="currentlyReading"> </div>
    </>
  );
};

export default CurrentlyReading;
