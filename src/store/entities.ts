import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import TodoReducer from "./todoSlice";

export default combineReducers({
  counter: counterReducer,
  todos: TodoReducer,
});
