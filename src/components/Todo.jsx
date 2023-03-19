import React from "react";

function Todo({ todo, deleteTodo }) {
  return (
    <div>
      <li>
        {todo.todo}
        <button onClick={() => deleteTodo(todo.id)}>&times;</button>
      </li>
    </div>
  );
}

export default Todo;
