import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../redux/actions/todoActions";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
const Todo = ({ todo }) => {
  const [input, setInput] = useState(todo);
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="row mx-2 align-items-center">
      <div className="col">
        {editable ? (
          <input
            className="todo-input edit"
            value={input.description}
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          ></input>
        ) : (
          <h1
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.description}
          </h1>
        )}
      </div>
      <RiCloseCircleLine
        className="delete-icon"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        delete
      </RiCloseCircleLine>{" "}
      <TiEdit
        className="edit-icon"
        onClick={() => {
          dispatch(editTodo(input));
          if (editable) {
            setInput("");
          }
          setEditable(!editable);
        }}
      >
        update
      </TiEdit>
    </div>
  );
};
export default Todo;
