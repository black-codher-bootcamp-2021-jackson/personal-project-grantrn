import "./styles/App.css";
import MyRoutes from "./components/Routes";
import { AuthContext } from "./context/AuthContext";
import { useContext, useState } from "react";
import axios from "axios";

function App() {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}`;
    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }
  const addToCurrently = async (book) => {
    console.log("hello add to currently");
    try {
      const res = await axios.patch(`users/${user._id}/currently`, book);
      console.log(book);
      console.log(res);
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
      />
    </>
  );
}

export default App;
