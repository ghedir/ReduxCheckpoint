import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_FILTER,
  TOGGLE_TODO,
} from "./todoTypes";
import { v4 as uuidv4 } from "uuid";

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: { ...newTodo, id: uuidv4(), isDone: false },
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
export const editTodo = (editedTodo) => {
  return {
    type: EDIT_TODO,
    payload: editedTodo,
  };
};
export const filterTodo = (filter) => {
  return {
    type: TOGGLE_FILTER,
    payload: filter,
  };
};
