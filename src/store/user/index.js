import initialState from "./initialState";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_LOGOUT
} from "./actionType";

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userData: action.payload.user_info,
        error: ''
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case USER_LOGOUT:
      return {
        ...state,
        isAuth: false,
        userData: {},
        error: ''
      }
    default:
      return state;
  }
};

export default userReducer;