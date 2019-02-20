import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import testReducer from "./test";

const reducers = combineReducers({
    form: formReducer
});

export default reducers;