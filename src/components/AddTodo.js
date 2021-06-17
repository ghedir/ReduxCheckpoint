import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState(null);

  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="todo-input"
        placeholder="Add a todo"
        type="text"
        onChange={(e) => setNewTodo({ description: e.target.value })}
      ></input>
      <button
        className="todo-button"
        onClick={() => dispatch(addTodo(newTodo))}
      >
        Add Todo
      </button>
    </div>
  );
};
export default AddTodo;
