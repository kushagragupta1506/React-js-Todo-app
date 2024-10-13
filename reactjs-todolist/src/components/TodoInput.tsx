import { useState } from "react";

const TodoInput = ({
  todo,
  setTodo,
  handleUpdateTodos,
}: {
  todo: string;
  setTodo: (a: string) => void;
  handleUpdateTodos: (a: string) => void;
}) => {
  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          handleUpdateTodos(todo);
          setTodo("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
