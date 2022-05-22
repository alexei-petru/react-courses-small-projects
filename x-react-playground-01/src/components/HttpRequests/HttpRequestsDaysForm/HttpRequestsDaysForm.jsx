import React, { useContext } from "react";
import MyInput from "../../../UI/MyInput";
import classes from "./HttpRequestsDaysForm.module.css";
import MyButton from "../../../UI/MyButton";
import { getTodayISOFormatedDate } from "../http-requests-helpers";
import DateContext from "../../../store/date/date-context";

const HttpRequestsDaysForm = (props) => {
  const dateCtx = useContext(DateContext);

  const selectedStartDateHandler = (event) => {
    dateCtx.changeStartDate(event);
  };

  const selectedEndDateHandler = (event) => {
    dateCtx.changeEndDate(event);
  };

  return (
    <form className={classes.form}>
      <p className={classes.title}>Select Date range</p>
      <p className={classes.titleHint}>*7 days auto range</p>
      <MyInput
        input={{
          type: "date",
          name: "startDate",
          value: dateCtx.startDate,
          min: "1995-01-01",
          max: getTodayISOFormatedDate(),
          onChange: selectedStartDateHandler,
          className: classes.startInput,
        }}
        label={{ name: "Start Date", className: classes["startDateLabel"] }}
      ></MyInput>
      <MyInput
        input={{
          type: "date",
          name: "endDate",
          value: dateCtx.endDate,
          max: getTodayISOFormatedDate(),
          onChange: selectedEndDateHandler,
          className: classes.endInput,
        }}
        label={{ name: "End Date", className: classes["endDateLabel"] }}
      ></MyInput>
      <div className={classes["button-wrapper"]}>
        <MyButton className={classes.sendRequestBtn} onClick={props.onClick}>
          Get asteroids info
        </MyButton>
      </div>
    </form>
  );
};

export default HttpRequestsDaysForm;
