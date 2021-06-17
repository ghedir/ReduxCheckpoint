import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todoReducer from "./todoReducer";

export default combineReducers({ tasks: todoReducer, filtre: filterReducer });
