import React from "react";
import { useSelector } from "react-redux";
// import { todoSlice } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div>
      <h1>Todo's</h1>
      <ul>
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-300 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-red">{todo.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
