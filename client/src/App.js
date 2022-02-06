import "./styles/App.css";
import MyRoutes from "./components/Routes";
import { AuthContext } from "./context/AuthContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

function App() {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]); //set from google api
  const [cBooks, setcBooks] = useState([]); //curently rading
  const [readBooks, setReadBooks] = useState([]); //read
  const [wantRead, setWantRead] = useState([]);

  //update arrays on client side
  const profileRead = (book) => {
    setReadBooks((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    setcBooks(cBooks.filter((item) => item !== book));
  }; //add on client side
  // filter from currentBooks to remove
  const profileCurrent = (book) => {
    setcBooks((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    setBooks(books.filter((item) => item !== book));
  };
  const profileCurrent2 = (book) => {
    setcBooks((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    setWantRead(wantRead.filter((item) => item !== book));
  };
  let options = {
    cBooks,
    profileRead,
    profileCurrent,
    profileCurrent2,
    readBooks,
    wantRead,
    setcBooks,
    setReadBooks,
    setWantRead,
  };

  //move into apicalls
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
      await axios.patch(`users/${user.user._id}/currently`, {
        currentBooks: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCurrently = async (id) => {
    console.log("hello delete currently");
    try {
      await axios.post(`users/${user.user._id}/currently`, {
        currentBooks: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addToRead = async (id) => {
    console.log("hello add to read");
    try {
      await axios.patch(`/users/${user.user._id}/read`, {
        read: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addToWant = async (id) => {
    console.log("hello add to want");
    try {
      await axios.patch(`/users/${user.user._id}/want`, {
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
        deleteCurrently={deleteCurrently}
        options={options}
      />
    </>
  );
}

export default App;
