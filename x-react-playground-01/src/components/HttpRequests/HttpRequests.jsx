import React, { useContext, useReducer, useState } from "react";
import LoadingImg from "../../UI/LoadingImg";
import classes from "./HttpRequests.module.css";
import HttpRequestsDaysForm from "./HttpRequestsDaysForm/HttpRequestsDaysForm";
import DaysList from "./DaysList/DaysList";
import NoAsteroids from "./NoAsteroids/NoAsteroids";
import {
  compareDaysArrayFromAPI,
  getNotDefaultSortedArray,
} from "./http-requests-helpers";
import SortAsteroids from "./SortAsteroids/SortAsteroids";
import DateContext from "../../store/date/date-context";

const HttpRequests = () => {
  const dateCtx = useContext(DateContext);
  const [isArrayEmpty, setIsArrayEmpty] = useState(false);
  const [showLoadingImg, setShowLoadingImg] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [daysArrayState, setDaysArrayState] = useState(false);
  const [sortedOption, setSortedOption] = useState("day");

  const getDaysArrayFromAPIHandler = async () => {
    return await compareDaysArrayFromAPI(dateCtx.startDate, dateCtx.endDate);
  };

  const mainResponseHandler = async (event) => {
    event.preventDefault();
    setShowLoadingImg(true);
    setErrorState(false);
    setDaysArrayState(false);
    setIsArrayEmpty(false);
    setSortedOption("day");

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

  const sortOptionHandler = (selectedOption) => {
    setSortedOption(selectedOption);
    if (daysArrayState.length > 0) {
      console.log(daysArrayState, "daysArrays");
      let notDefaultSortedArray = getNotDefaultSortedArray(
        daysArrayState,
        selectedOption
      );
      setDaysArrayState(notDefaultSortedArray);
    }
  };

  return (
    <div className={classes.httpRequests}>
      <HttpRequestsDaysForm onClick={mainResponseHandler} />
      {daysArrayState && (
        <SortAsteroids
          sortedOption={sortedOption}
          onSortOptionChange={sortOptionHandler}
        />
      )}
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
