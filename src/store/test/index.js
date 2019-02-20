import initialState from "./initialState";
import {
    LOAD_GENRE_LIST
  } from "./actionType";

const testReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_GENRE_LIST:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default testReducer;