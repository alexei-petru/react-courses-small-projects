import React from "react";

const DateContext = React.createContext({
  startDate: "",
  endDate: "",
  changeStartDate: () => {},
  changeEndDate: () => {},
});

export default DateContext;
