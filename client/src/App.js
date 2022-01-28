import "./styles/App.css";
import MyRoutes from "./components/Routes";
import { AuthContext } from "./context/AuthContext";
import { useContext, useState } from "react";


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
  console.log(books);
  return (
    <>
      <MyRoutes user={user} findBooks={findBooks} books={books} />
    </>
  );
}

export default App;
