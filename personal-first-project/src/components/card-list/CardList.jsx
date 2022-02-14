import React from "react";
import "./CardList.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })}
    </div>
  );
};
