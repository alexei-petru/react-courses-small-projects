import React from "react";
import HttpRequestsList from "../HttpRequestsList/HttpRequestsList";

const DaysList = ({ daysArrays, ...props }) => {
  return (
    <ol>
      {daysArrays.map((dayArray, i) => {
        return (
          <HttpRequestsList mainArray={dayArray} key={`${i} ${dayArray[0]}`} />
        );
      })}
    </ol>
  );
};

export default DaysList;
