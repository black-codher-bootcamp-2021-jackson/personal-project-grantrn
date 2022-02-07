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

  //move from currrent to read
  const profileRead = (book) => {
    setReadBooks((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    setcBooks(cBooks.filter((item) => item !== book));
  };

  // from google book results to current books
  const profileCurrent = (book) => {
    setcBooks((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    setBooks(books.filter((item) => item !== book));
  };

  // from google book results to want to read client side
  const profileWant = (book) => {
    setWantRead((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    setBooks(books.filter((item) => item !== book));
  };

  //move from want to read to currently reading clinet side
  const profileCurrent2 = (book) => {
    setcBooks((previousState) => {
      console.log(previousState);
      return [...previousState, book];
    });

    setWantRead(wantRead.filter((item) => item !== book));
  };

  //delete from currently reading client side
  const deleteProfileCurrent = (book) => {
    setcBooks(cBooks.filter((item) => item !== book));
  };

  //delete from want to read client side
  const deleteProfileWant = (book) => {
    setWantRead(wantRead.filter((item) => item !== book));
  };

  //delete from read client side
  const deleteProfileRead = (book) => {
    setReadBooks(readBooks.filter((item) => item !== book));
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
    profileWant,
    deleteProfileCurrent,
    deleteProfileRead,
    deleteProfileWant,
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

  const deleteRead = async (id) => {
    console.log("hello delete read");
    try {
      await axios.post(`users/${user.user._id}/read`, {
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

  const deleteWant = async (id) => {
    console.log("hello delete want");
    try {
      await axios.post(`users/${user.user._id}/want`, {
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
        deleteRead={deleteRead}
        deleteWant={deleteWant}
        options={options}
      />
    </>
  );
}

export default App;
