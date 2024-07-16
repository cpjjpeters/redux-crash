import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
// import { todoSlice } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // console.log(todos);

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
            <div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
