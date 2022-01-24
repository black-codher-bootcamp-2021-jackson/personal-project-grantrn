export const LoginStart = (userCredentials) => ({ type: "LOGIN_START" });
export const LoginSucess = (user) => ({ type: "LOGIN_SUCCESS",
reqbody: user});
export const LoginFailure = (error) => ({ type: "LOGIN_FAILURE",
reqbody: error });
