import React from "react";
import ToDoItem from "./ToDoItem";
import "./ToDos.css";

function ToDos(props) {
  return (
    <ul className="section-todos">
      {props.toDosData.map((toDo) => {
        return (
          <ToDoItem
            key={toDo.id}
            text={toDo.text}
            id={toDo.id}
            onToDoDelete={props.onToDoDelete}
          />
        );
      })}
    </ul>
  );
}

export default ToDos;
