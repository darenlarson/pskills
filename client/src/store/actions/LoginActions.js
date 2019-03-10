import axios from "axios"

const loginEndpoint = `https://prisoner-skills-backend.herokuapp.com/api/users/login`

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FALIURE";
export const LOGOUT_USER = "LOGOUT_USER"
export const PERSIST_LOGIN = "PERSIST_LOGIN"
export const DISMISS_LOGIN_ERROR = "DISMISS_LOGIN_ERROR"

export const loginUser = (loginobject) => dispatch => {
    console.log('logging in', loginobject)
    dispatch({ type: LOGIN_USER_START });
  axios
    .post(`${loginEndpoint}`, loginobject)
    .then(res => dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: LOGIN_USER_FAILURE, payload: err.response.data.message }));
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const persistLogin = (logindata) => {
    return {
        type: PERSIST_LOGIN,
        payload: logindata
    }
}

export const dismissLoginError = () => {
    return {
        type: DISMISS_LOGIN_ERROR
    }
}