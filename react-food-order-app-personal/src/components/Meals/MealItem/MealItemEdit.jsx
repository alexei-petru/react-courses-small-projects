import React, { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemEdit.module.css";

const MealItemEdit = (props) => {
  const editInputsRef = useRef({
    name: null,
    description: null,
    price: null,
  });

  const nameRef = useRef();

  const submitEditValuesHandler = () => {
    console.log(editInputsRef);
    console.log(nameRef.current.value);
  };
  return (
    <>
      <Input
        className={classes.input}
        input={{ type: "text", id: "name", defaultValue: props.menuItem.name }}
        label={"name"}
        ref={nameRef}
      />
      <Input
        className={classes.input}
        input={{
          type: "text",
          id: "description",
          defaultValue: props.menuItem.description,
        }}
        label={"description"}
        ref={editInputsRef.descripion}
      />
      <Input
        className={classes.input}
        input={{
          type: "text",
          id: "price",
          defaultValue: props.menuItem.price,
        }}
        label={"price"}
        ref={editInputsRef.price}
      />
      <div className={classes["btns-confirm-wrapper"]}>
        <button onClick={props.closeEdit}>Cancel</button>
        <button onClick={submitEditValuesHandler}>Confirm</button>
      </div>
    </>
  );
};

export default MealItemEdit;
