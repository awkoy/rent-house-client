import {
    LOAD_GENRE_LIST
  } from "./actionType";
  import { video } from "../../API";
  
  const createAction = ({ type, payload }) => {
    return {
      type,
      payload
    };
  };
  
  const loadGenreList = () => async dispatch => {
    const res = await video.genres();
    dispatch(createAction({ type: LOAD_GENRE_LIST, payload: res.data.genres }));
  };
  
  export { loadGenreList };