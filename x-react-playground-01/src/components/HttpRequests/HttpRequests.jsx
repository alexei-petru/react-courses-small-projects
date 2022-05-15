import React, { useCallback, useEffect, useReducer, useState } from "react";
import MyButton from "../../UI/MyButton";
import LoadingImg from "../../UI/LoadingImg";
import classes from "./HttpRequests.module.css";
import HttpRequestsList from "./HttpRequestsList";
import HttpRequestsDaysForm from "./HttpRequestsDaysForm/HttpRequestsDaysForm";

const getTodayFormatedDate = () => {
  return new Date().toISOString().slice(0, 10);
};

const getAsteroidAPIArray = async (startDate, endDate) => {
  console.log("13:06:01", startDate, endDate);
  const ApiKey = "XDujIISECRZoDgjNy2xU4w6AkxzotNpgiZRuCRtd";
  //date-format"YYYY-MM-DD";

  const closestAsteroidsApi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${ApiKey}`;
  const responseApi = await fetch(closestAsteroidsApi);
  if (!responseApi.ok) throw new Error(`Server answer ${responseApi.status} `);
  const responseJson = await responseApi.json();
  let daysArrays = Object.entries(responseJson["near_earth_objects"]);
  return daysArrays;
};

const reducer = (state, action) => {
  if (action.type === "STARTDATE") {
    const newStartDate = action.value;
    // if()
    return { ...state, startDate: newStartDate };
  }

  if (action.type === "ENDDATE") {
    console.log("end");
    const newEndDate = action.value;
    return { ...state, endDate: newEndDate };
  }
  return state;
};

const HttpRequests = () => {
  const initialState = {
    startDate: getTodayFormatedDate(),
    endDate: getTodayFormatedDate(),
  };

  const [dateState, dispatch] = useReducer(reducer, initialState);

  const [daysState, setDaysState] = useState(false);
  const [showLoadingImg, setShowLoadingImg] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const mainResponseHandler = useCallback(async () => {
    setShowLoadingImg(true);
    setDaysState(false);
    setErrorState(false);
    try {
      const daysArrays = (
        await getAsteroidAPIArray(dateState.startDate, dateState.endDate)
      ).sort((firstArr, secondArr) => {
        return firstArr[0].localeCompare(secondArr[0]);
      });

      const daysList = (
        <ol>
          {daysArrays.map((mainArray, i) => {
            return (
              <HttpRequestsList
                mainArray={mainArray}
                key={`${i} ${mainArray[0]}`}
              />
            );
          })}
        </ol>
      );
      setDaysState(
        daysArrays.length ? (
          daysList
        ) : (
          <p>No asteroids has been found for this day</p>
        )
      );
    } catch (error) {
      setErrorState(<p>Something went wrong {error.message} </p>);
    }
    setShowLoadingImg(false);
  }, [dateState]);

  //fetch data on startup
  // useEffect(() => {
  //   mainResponseHandler();
  // }, []);

  return (
    <div className={classes.httpRequests}>
      <HttpRequestsDaysForm
        onSelectDate={dispatch}
        selectedDate={dateState}
        getToday={getTodayFormatedDate}
      />
      <MyButton
        className={classes.sendRequestBtn}
        onClick={mainResponseHandler}
      >
        Get asteroids info
      </MyButton>
      <div>
        <LoadingImg
          className={showLoadingImg ? classes.showImg : classes.hideImg}
        />
      </div>
      <div>{errorState ? errorState : daysState}</div>
    </div>
  );
};

export default HttpRequests;
