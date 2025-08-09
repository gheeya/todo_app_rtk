import React, { useState, useEffect } from "react";
import "./Todo.css";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../../store/todoSlice";

function Todo({ id, todo, status }) {
  const [isEditable, setEditable] = useState(false);
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  // Used for storing the todo value
  const [value, setValue] = useState();

  // As soon as component renders, add the todo value to the value state
  // setValue(todo);
  useEffect(() => {
    setValue(todo);
  }, []);

  const handleEditClick = () => {
    if (!completed) {
      setEditable((prev) => !prev);
    }
  };

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    setEditable(false);
    // dispatch([todoId, {...todo,todo:}]);
    const formData = new FormData(e.target);
    for (let [_, value] of formData.entries()) {
      dispatch(editTodo([id, { id, todo: value, status }]));
    }
  };

  // React is async, so I cant use the completed state variable after updating it immediately
  const handleCompleted = (e) => {
    const isChecked = e.target.checked;
    setCompleted(isChecked);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="border-1 p-1 h-10 w-full my-2 t-container">
      <div className="check-container">
        <input type="checkbox" onChange={handleCompleted} />
      </div>
      <div
        className={`content-container ${completed ? "line-through" : ""}`}
        data-id={id}
        data-status={status}
      >
        {isEditable ? (
          <form onSubmit={handleTodoSubmit}>
            <input
              className="w-full h-8"
              type="text"
              value={value}
              onInput={(e) => setValue(e.target.value)}
              name="item"
            />
          </form>
        ) : (
          <div className="w-full h-8">{value}</div>
        )}
      </div>
      <div className="btn-container">
        <span
          onClick={handleEditClick}
          className="edit-btn text-xl text-blue-700 cursor-default"
        >
          &#9998;
        </span>
        <span
          onClick={handleDeleteClick}
          className="delete-btn text-xl text-red-700 cursor-default"
        >
          &#10539;
        </span>
      </div>
    </div>
  );
}

export default Todo;
