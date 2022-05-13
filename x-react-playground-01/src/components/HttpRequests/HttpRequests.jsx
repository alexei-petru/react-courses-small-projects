import React, { useEffect, useState } from "react";
import MyButton from "../../UI/MyButton";
import LoadingImg from "../../UI/LoadingImg";
import classes from "./HttpRequests.module.css";

const HttpRequests = () => {
  const ApiKey = "XDujIISECRZoDgjNy2xU4w6AkxzotNpgiZRuCRtd";
  const startDate = "2022-06-01";
  const endDate = "2022-06-02";
  const closestAsteroidsApi = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${ApiKey}`;

  const [daysState, setDaysState] = useState("");
  const [showLoadingImg, setShowLoadingImg] = useState(false);

  const jsonResponse = async () => {
    setShowLoadingImg(true);
    try {
      const responseApi = await fetch(closestAsteroidsApi);
      const responseJson = await responseApi.json();

    //   const testArr = Object.entries(responseJson["near_earth_objects"]);
    //   console.log(testArr);

      let daysArrays = Object.entries(responseJson["near_earth_objects"]).map(
        (mainArrays, i) => {
          return <li key={`${i} ${mainArrays[0]}`}>{mainArrays[0]}</li>;
        }
      );
      setDaysState(daysArrays);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setShowLoadingImg(false);
  }, [daysState]);

  // const daysArrNames = Object.entries(json["near_earth_objects"])
  //   .map((mainArrays) => {
  //     //   console.log(mainArrays, "main Arrays");
  //     return mainArrays[0];
  //   })
  //   .map((arr) => arr[0]);

  return (
    <div className={classes.httpRequests}>
      <MyButton
        className={classes.sendRequestBtn}
        onClick={() => jsonResponse()}
      >
        Get asteroids info
      </MyButton>
      <div>
        <LoadingImg
          className={showLoadingImg ? classes.showImg : classes.hideImg}
        />
      </div>
      <div>{daysState ? daysState : "notResponse"}</div>
    </div>
  );
};

export default HttpRequests;
