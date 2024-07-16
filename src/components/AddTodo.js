import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-8000 rounded border border-gray-700 rounded-md px-4 py-2
        focus:border-indigo-900 text-base outline-none text-gray-900 py-1 px-3"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add Todo
      </button>
    </form>
    // <div>
    //   <input type="text" />
    //   <button>Add Todo</button>
    // </div>
  );
}

export default AddTodo;
