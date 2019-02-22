import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT
} from "./actionType";
import {
  userApi
} from "../../api";

const userLogin = (data) => async dispatch => {
  const res = await userApi.login(data);

  if (res.data.token) {
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data
    });
    localStorage.setItem("rent-app-user-token", res.data.token);
    localStorage.setItem("rent-app-user-info", res.data.user_info.email);
  } else {
    dispatch({
      type: USER_LOGIN_ERROR,
      payload: res.data
    });
  }
};

const userLogout = () => async dispatch => {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem("rent-app-user-token");
  localStorage.removeItem("rent-app-user-info");
}

export {
  userLogin,
  userLogout
};