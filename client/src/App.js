import "./styles/App.css";
import MyRoutes from "./components/Routes";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Header from './components/Header'


function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <MyRoutes user={user} />
    </>
  );
}

export default App;
