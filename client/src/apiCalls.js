import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" }); //dispatch to trigger state change
  try {
    const res = await axios.post("/users/login", userCredentials);
    console.log(res.data);
    window.localStorage.setItem("token", res.data.token);
    dispatch({ type: "LOGIN_SUCCESS", reqbody: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", reqbody: err });
  }
};
