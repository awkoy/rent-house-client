import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import userReducer from "./user";
// import testReducer from "./test";

const reducers = combineReducers({
    form: formReducer,
    user: userReducer
});

export default reducers;