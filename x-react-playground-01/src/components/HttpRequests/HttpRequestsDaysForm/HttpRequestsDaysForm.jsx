import React from "react";
import MyInput from "../../../UI/MyInput";
import classes from "./HttpRequestsDaysForm.module.css";

const HttpRequestsDaysForm = (props) => {
  const selectedStartDateHandler = (event) => {
    props.onSelectDate({ type: "STARTDATE", value: event.target.value });
  };

  const selectedEndDateHandler = (event) => {
    props.onSelectDate({ type: "ENDDATE", value: event.target.value });
  };

  return (
    <form className={classes.form}>
      <p className={classes.title}>Select Date range</p>
      <p className={classes.titleHint}>*7 days range</p>
      <MyInput
        input={{
          type: "date",
          name: "startDate",
          defaultValue: props.selectedDate.startDate,
          min: "1995-01-01",
          max: props.getToday(),
          onChange: selectedStartDateHandler,
          className: classes.startInput,
        }}
        label={{ name: "Start Date", className: classes["startDateLabel"] }}
      ></MyInput>
      <MyInput
        input={{
          type: "date",
          name: "endDate",
          defaultValue: props.selectedDate.endDate,
          onChange: selectedEndDateHandler,
          className: classes.endInput,
          max: props.getToday(),
        }}
        label={{ name: "End Date", className: classes["endDateLabel"] }}
      ></MyInput>
    </form>
  );
};

export default HttpRequestsDaysForm;
