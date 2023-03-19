import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

function App() {
  const [list, setList] = useState([]);

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  return (
    <div>
      <h1>Todo List</h1>

      <TodoList>
        {list.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
