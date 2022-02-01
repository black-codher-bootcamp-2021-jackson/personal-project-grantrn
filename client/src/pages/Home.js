import Header from "../components/Header";
import Profile from "../components/Profile";
import Search from '../components/Search'


const Home = ({addToRead, findBooks}) => {
  return (
    <>
      <Header />
      <Search findBooks={findBooks}/>
      <Profile addToRead={addToRead}/>
      
  
    </>
  );
};

export default Home;
