import React, { useReducer } from "react";
import DateContext from "./date-context";
import {
  isDatesRangeValid,
  getTodayISOFormatedDate,
} from "../../components/HttpRequests/http-requests-helpers";

const DateProvider = ({ children }) => {
  const reducer = (state, action) => {
    if (action.type === "STARTDATE") {
      const newStartDate = action.value;
      const datesRange = isDatesRangeValid(
        action.value,
        state.endDate,
        action.type
      );

      if (datesRange) {
        return datesRange;
      } else {
        return { ...state, startDate: newStartDate };
      }
    }

    if (action.type === "ENDDATE") {
      const newEndDate = action.value;
      const datesRange = isDatesRangeValid(
        state.startDate,
        newEndDate,
        action.type
      );

      if (datesRange) {
        return datesRange;
      } else {
        return { ...state, startDate: newEndDate };
      }
    }
  };

  const initialState = {
    startDate: getTodayISOFormatedDate(),
    endDate: getTodayISOFormatedDate(),
  };

  const changeStartDateHandler = (event) => {
    dispatch({ type: "STARTDATE", value: event.target.value });
  };
  const changeEndDateHandler = (event) => {
    dispatch({ type: "ENDDATE", value: event.target.value });
  };

  const [dateState, dispatch] = useReducer(reducer, initialState);

  const dateContext = {
    startDate: dateState.startDate,
    endDate: dateState.endDate,
    changeStartDate: changeStartDateHandler,
    changeEndDate: changeEndDateHandler,
  };

  return (
    <DateContext.Provider value={dateContext}>{children}</DateContext.Provider>
  );
};
export default DateProvider;
