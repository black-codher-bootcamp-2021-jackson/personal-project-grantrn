import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); //alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method
  return (
    <AuthContext.Provider //allows consuming components to subscribe to context changes
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children} {/*app component in src/index.js*/}
    </AuthContext.Provider>
  );
}; //makes user accessible all over app
