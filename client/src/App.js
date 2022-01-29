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
  const addToCurrently = (id) => {
    console.log("hello add to currently");
    try {
      const res = axios.patch(`users/${user._id}/currently`, id);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const addToBasket = (product) => {
    console.log(product);
    console.log("hello add to basket");
  };

  return (
    <>
      <MyRoutes
        user={user}
        findBooks={findBooks}
        books={books}
        addToCurrently={addToCurrently}
        addToBasket={addToBasket}
      />
    </>
  );
}

export default App;
