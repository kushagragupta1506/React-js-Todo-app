import React from "react";

const TodoCard = ({
  item,
  index,
  handleDeleteTodo,
  handleEditTodo,
}: {
  item: string;
  index: number;
  handleDeleteTodo: (index: number) => void;
  handleEditTodo: (index: number) => void;
}) => {
  return (
    <li className="todoItem" key={index}>
      <p>{item}</p>
      <div className="actionsContainer">
        <i
          className="fa-regular fa-pen-to-square"
          onClick={() => handleEditTodo(index)}
        ></i>
        <i
          className="fa-solid fa-trash"
          onClick={() => handleDeleteTodo(index)}
        ></i>
      </div>
    </li>
  );
};

export default TodoCard;
