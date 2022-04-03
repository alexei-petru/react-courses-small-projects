import { React, useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import feedbackData from "./components/feedbackData/feedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </>
  );
};

export default App;
