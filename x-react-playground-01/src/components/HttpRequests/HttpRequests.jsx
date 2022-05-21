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

//log

const isDatesRangeValid = (startDate, endDate, type) => {
  const startDateMs = Date.parse(startDate);
  const endDateMs = Date.parse(endDate);
  const sevenDays = 7 * 24 * 60 * 60 * 1000;

  if (endDateMs - startDateMs < 0) {
    return {
      startDate: type === startDate ? startDate : endDate,
      endDate: type === startDate ? startDate : endDate,
    };
  }

  if (endDateMs - startDateMs > sevenDays) {
    if (type === "STARTDATE") {
      const datePlusSevenDaysISO = getTodayISOFormatedDate(
        startDateMs + sevenDays
      );
      return { startDate: startDate, endDate: datePlusSevenDaysISO };
    }

    if (type === "ENDDATE") {
      const datePlusSevenDaysISO = getTodayISOFormatedDate(
        endDateMs - sevenDays
      );
      return { startDate: datePlusSevenDaysISO, endDate: endDate };
    }
  }
};

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

    //fallback
    if (datesRange) {
      return datesRange;
    } else {
      return { ...state, startDate: newEndDate };
    }
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
