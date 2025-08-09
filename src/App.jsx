import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice.js";

function App() {
  // On page load get the data from the store
  const store = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  // Store the data and new data in todo
  const [todo, setTodo] = useState([]);

  // Keep track of changing values
  useEffect(() => {
    setTodo(store);
    console.log("This is a todo", todo);
  }, [store, todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (let [_, value] of formData.entries()) {
      const todo = {
        id: String(Date.now()).slice(0, 9),
        todo: value,
        status: "active",
      };
      dispatch(addTodo(todo));
    }
    document.querySelector("input").value = "";
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-2">Todo App</h2>
      <div className="main-container h-100 w-180 shadow-lg border-1 border-black">
        <div className="form-container">
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-row justify-center items-center"
          >
            <input
              type="text"
              className="border-1 w-120 pl-2 py-1"
              placeholder="Enter Todo"
              name="todo"
              required
            />
            <button
              type="submit"
              className="bg-green-700 text-white py-1 px-2 hover:bg-green-800 border-1 border-green-700 hover:border-green-800"
            >
              Add Todo
            </button>
          </form>
        </div>
        <div className="todo-container px-2 pt-2 h-80">
          {todo.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
