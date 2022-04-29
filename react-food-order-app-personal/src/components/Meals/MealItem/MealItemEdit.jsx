import React, { useContext, useRef, useState } from "react";
import AvailableMealsContext from "../../../store/available-meals-context";
import Input from "../../UI/Input";
import classes from "./MealItemEdit.module.css";

const MealItemEdit = (props) => {
  const availableMealsCtx = useContext(AvailableMealsContext);
  const [isPriceValid, setIsPriceValid] = useState(false);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const timerRef = useRef({});

  const submitEditValuesHandler = (event) => {
    event.preventDefault();
    if (+priceRef.current.value <= 0 || priceRef.current.value > 10000) {
      setIsPriceValid(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsPriceValid(false);
      }, 3000);
      return;
    }
    const editedValues = {
      id: props.menuItem.id,
      currentId: `${Date.now()}`,
      name: nameRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      price: +priceRef.current.value,
    };

    availableMealsCtx.editItem(editedValues);
    props.closeEdit();
  };
  return (
    <form className={classes["edit-meal-form"]} onSubmit={submitEditValuesHandler}>
      <Input
        className={classes.input}
        input={{
          type: "text",
          id: "name",
          defaultValue: props.menuItem.name,
          required: true,
        }}
        label={"name"}
        ref={nameRef}
      />
      <Input
        className={classes.input}
        input={{
          type: "text",
          id: "description",
          defaultValue: props.menuItem.description,
          required: true,
        }}
        label={"description"}
        ref={descriptionRef}
      />
      <Input
        className={classes.input}
        input={{
          type: "number",
          id: "price",
          defaultValue: props.menuItem.price,
          required: true,
          step: "any",
        }}
        label={"price"}
        ref={priceRef}
      />
      {isPriceValid && (
        <p style={{ margin: 0, color: "red" }}>
          Please type a price bigger than 0 and no more than 10 000
        </p>
      )}
      <div className={classes["btns-confirm-wrapper"]}>
        <button type="button" onClick={props.closeEdit}>
          Cancel
        </button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default MealItemEdit;
