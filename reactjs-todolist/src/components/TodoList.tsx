import TodoCard from "./TodoCard";

const TodoList = ({
  todos,
  handleDeleteTodo,
  handleEditTodo,
}: {
  todos: Array<string>;
  handleDeleteTodo: (index: number) => void;
  handleEditTodo: (index: number) => void;
}) => {
  return (
    <ul className="main">
      {todos.map((item, index) => (
        <TodoCard
          item={item}
          key={index}
          index={index}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
