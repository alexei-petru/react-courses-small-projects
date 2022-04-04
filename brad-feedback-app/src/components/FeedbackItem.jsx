import { FaTimes } from "react-icons/fa";
import React from "react";
import Card from "./shared/Card";
// import "../index.css"

const FeedbackItem = ({ data,deleteHandler }) => {

  return (
    <Card>
      <li className="feedback-item">
        <div className="feedback-rating">{data.rating}</div>
        <button onClick={()=>deleteHandler(data.id)} className="close">
          <FaTimes style={{ color: "purple" }} />
        </button>
        <p className="feedback-text">{data.text}</p>
      </li>
    </Card>
  );
};

export default FeedbackItem;
