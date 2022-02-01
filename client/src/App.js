import "./styles/App.css";
import MyRoutes from "./components/Routes";
import { AuthContext } from "./context/AuthContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Profile from "./components/Profile";

function App() {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  function refreshPage() {
    window.location.reload(false);
  }

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}`;
    const results = await fetch(url).then((res) => res.json());
    console.log(results);
    if (!results.error) {
      setBooks(results.items);
    }
  }
  const addToCurrently = async (id) => {
    console.log("hello add to currently");
    try {
      const res = await axios.patch(`users/${user._id}/currently`, {
        currentBooks: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addToRead = async (id) => {
    console.log("hello add to read");
    try {
      const res = await axios.patch(`/users/${user._id}/read`, {
        read: id,
      });
    } catch (err) {
      console.log(err);
    } finally {
      refreshPage();
    }
  };

  const addToWant = async (id) => {
    console.log("hello add to want");
    try {
      const res = await axios.patch(`/users/${user._id}/want`, {
        wantToRead: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MyRoutes
        user={user}
        findBooks={findBooks}
        books={books}
        addToCurrently={addToCurrently}
        addToRead={addToRead}
        addToWant={addToWant}
      />
    </>
  );
}

export default App;
