import React from "react";
import "./App.css";

function App() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-2">Todo App</h2>
      <div className="main-container h-100 w-180 shadow-lg border-1 border-black">
        <div className="form-container">
          <form className="w-full h-full flex flex-row justify-center items-center">
            <input
              type="text"
              className="border-1 w-120 pl-2 py-1"
              placeholder="Enter Todo"
            />
            <button className="bg-green-700 text-white py-1 px-2 hover:bg-green-800 border-1 border-green-700 hover:border-green-800">
              Add Todo
            </button>
          </form>
        </div>
        <div className="todo-container"></div>
      </div>
    </div>
  );
}

export default App;
