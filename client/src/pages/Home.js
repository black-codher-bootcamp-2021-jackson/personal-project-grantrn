import Header from "../components/Header";
import Profile from "../components/Profile";
import Search from "../components/Search";
import { useState } from "react";

const Home = ({ addToRead, findBooks, addToCurrently, options }) => {
  const [keyword, setKeyword] = useState("");
  console.log(options);
  return (
    <div className="wholeContainer">
      <Header />
      <Search findBooks={findBooks} keyword={keyword} setKeyword={setKeyword} />
      <Profile
        addToRead={addToRead}
        addToCurrently={addToCurrently}
        options={options}
      />
    </div>
  );
};

export default Home;
