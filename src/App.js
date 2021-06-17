import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { filterTodo } from "./redux/actions/todoActions";

function App() {
  const todos = useSelector((state) => state.tasks.todos);
  const filter = useSelector((state) => state.filtre);
  const dispatch = useDispatch();
  return (
    <div className="todo-app">
      <h1>What's the Plan for Today?</h1>
      <AddTodo />
      <div className="btn-group" role="group">
        <button
          className="todo-button-all"
          onClick={() => dispatch(filterTodo("All"))}
        >
          All
        </button>
        <button
          className="todo-button-complete"
          onClick={() => dispatch(filterTodo(true))}
        >
          Completed
        </button>
        <button
          className="todo-button-incomple"
          onClick={() => dispatch(filterTodo(false))}
        >
          Incomplete
        </button>
      </div>

      <TodoList
        todos={
          filter === "All" ? todos : todos.filter((el) => el.isDone === filter)
        }
      />
    </div>
  );
}

export default App;
