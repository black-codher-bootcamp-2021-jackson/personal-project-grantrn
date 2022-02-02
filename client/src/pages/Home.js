import Header from "../components/Header";
import Profile from "../components/Profile";
import Search from "../components/Search";
import { useState } from "react";

const Home = ({ addToRead, findBooks, addToCurrently }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <Header />
      <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
      <Profile addToRead={addToRead} addToCurrently={addToCurrently} />
    </>
  );
};

export default Home;
