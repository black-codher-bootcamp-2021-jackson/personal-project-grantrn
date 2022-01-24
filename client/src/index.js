import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextWrapper } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextWrapper>
      <App /> {/*children of AuthContextWrapper*/}
    </AuthContextWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
