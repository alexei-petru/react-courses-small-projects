import React from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  const deleteItemHandler = () => {
    props.onToDoDelete(props.id);
  };
  return (
    <li className="to-do__item">
      <p className="to-do__text">{props.text}</p>
      <button onClick={deleteItemHandler} className="to-do__btn-delete">
        X
      </button>
    </li>
  );
}

export default ToDoItem;
