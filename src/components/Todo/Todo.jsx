import React from "react";

function Todo({ id, todo, status }) {
  return (
    <div
      className="border-1 p-1 h-10 w-full my-2"
      data-id={id}
      data-status={status}
    >
      {todo}
    </div>
  );
}

export default Todo;
