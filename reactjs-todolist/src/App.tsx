import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoCard from "./components/TodoCard";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const persistTodos = (todos: string[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleUpdateTodos = (todo: string) => {
    const x = [...todos, todo];
    setTodos(x);
    persistTodos(x);
  };

  const handleDeleteTodo = (index: number) => {
    const currTodos = todos.filter((_, i) => i !== index);
    setTodos(currTodos);
  };
  const handleEditTodo = (index: number) => {
    setTodo(todos[index]);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  return (
    <main>
      <TodoInput
        todo={todo}
        setTodo={setTodo}
        handleUpdateTodos={handleUpdateTodos}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </main>
  );
}

export default App;
