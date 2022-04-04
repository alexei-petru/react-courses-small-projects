import { React, useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./components/feedbackData/feedbackData";
import FeedbackStats from "./components/FeedbackStats";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const feedbackDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          deleteHandler={feedbackDelete}
        ></FeedbackList>
      </div>
    </>
  );
};

export default App;
