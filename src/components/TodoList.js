import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((elm) => (
        <Todo key={elm.id} todo={elm} />
      ))}
    </div>
  );
};
export default TodoList;
