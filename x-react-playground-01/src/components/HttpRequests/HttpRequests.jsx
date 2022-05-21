import React, { useReducer, useState } from "react";
import LoadingImg from "../../UI/LoadingImg";
import classes from "./HttpRequests.module.css";
import HttpRequestsDaysForm from "./HttpRequestsDaysForm/HttpRequestsDaysForm";
import DaysList from "./DaysList/DaysList";
import NoAsteroids from "./NoAsteroids/NoAsteroids";
import {
  compareDaysArrayFromAPI,
  getTodayISOFormatedDate,
} from "./http-requests-helpers";

const reducer = (state, action) => {
  if (action.type === "STARTDATE") {
    const startDateMs = Date.parse(action.value);
    const endDateMs = Date.parse(state.endDate);
    console.log(startDateMs);
    console.log(endDateMs);

    if (endDateMs - startDateMs < 0) {
      console.log(endDateMs - startDateMs, "minus");
      return { startDate: action.value, endDate: action.value };
    }

    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    if (endDateMs - startDateMs > sevenDays) {
      console.log("bigger Than 7");
      const datePlusSevenDaysISO = getTodayISOFormatedDate(
        startDateMs + sevenDays
      );
      console.log(datePlusSevenDaysISO);
      return { startDate: action.value, endDate: datePlusSevenDaysISO };
    }

    const newStartDate = action.value;
    return { ...state, startDate: newStartDate };
  }

  if (action.type === "ENDDATE") {
    console.log("end");
    const newEndDate = action.value;
    return { ...state, endDate: newEndDate };
  }
};

const HttpRequests = () => {
  const initialState = {
    startDate: getTodayISOFormatedDate(),
    endDate: getTodayISOFormatedDate(),
  };

  const [dateState, dispatch] = useReducer(reducer, initialState);

  const [isArrayEmpty, setIsArrayEmpty] = useState(false);
  const [showLoadingImg, setShowLoadingImg] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [daysArrayState, setDaysArrayState] = useState(false);

  const getDaysArrayFromAPIHandler = async () => {
    return await compareDaysArrayFromAPI(
      dateState.startDate,
      dateState.endDate
    );
  };

  const mainResponseHandler = async (event) => {
    event.preventDefault();
    setShowLoadingImg(true);
    setErrorState(false);
    setDaysArrayState(false);
    setIsArrayEmpty(false);

    try {
      const daysArrays = await getDaysArrayFromAPIHandler();
      if (daysArrays.length > 0) {
        setDaysArrayState(daysArrays);
      } else if (!daysArrays.length) {
        setIsArrayEmpty(true);
      }
    } catch (error) {
      setErrorState(error.message);
    }
    setShowLoadingImg(false);
  };

  return (
    <div className={classes.httpRequests}>
      <HttpRequestsDaysForm
        onSelectDate={dispatch}
        selectedDate={dateState}
        getToday={getTodayISOFormatedDate}
        onClick={mainResponseHandler}
      />
      <div>
        <LoadingImg
          className={showLoadingImg ? classes.showImg : classes.hideImg}
        />
      </div>
      <div>
        {!errorState && !isArrayEmpty && daysArrayState && (
          <DaysList daysArrays={daysArrayState} />
        )}
        {errorState && <p>Something went wrong {errorState}</p>}
        {isArrayEmpty && <NoAsteroids />}
      </div>
    </div>
  );
};

export default HttpRequests;
