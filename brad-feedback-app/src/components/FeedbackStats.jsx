import React from "react";

const FeedbackStats = ({ feedback }) => {
  const averageRating =
    feedback.length &&
    (feedback.reduce((prev, cur) => {
      return prev + cur.rating;
    }, 0) / feedback.length).toFixed();

  return (
    <div className="feedback-stats">
      <h4 className="feedback-stats__amount">
        <span className="feedback-stats__number">{feedback.length} </span>
        Reviews
      </h4>
      <h4 className="feedback-stats__average-rating">
        Average Rating:
        <span className="feedback-stats__number"> {averageRating}</span>
      </h4>
    </div>
  );
};

export default FeedbackStats;
