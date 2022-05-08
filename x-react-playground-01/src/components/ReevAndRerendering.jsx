import React, { useState } from "react";
import MemoReevaluation from "./MemoReevaluation";

const ReevAndRerendering = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => setShowParagraph((prevState) => !prevState)}>
        Change state
      </button>
      {showParagraph && <p>My paragraph</p>}
      <MemoReevaluation />
    </div>
  );
};

export default ReevAndRerendering;
