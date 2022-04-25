import React, { useContext, useRef, useState } from "react";
import AddMealButton from "./AddMealButton";
import classes from "./AddMeal.module.css";
import Modal from "../../UI/Modal";
import Input from "../../UI/Input";
import AvailableMealsContext from "../../../store/available-meals-context";
import doneImage from "../../../assets/done.png";

const AddMeal = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [isSubmitDone, setIsSubmitDone] = useState(false);
  const [timer] = useState({ current: null });

  const mealsCtx = useContext(AvailableMealsContext);
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();

  const addItemHandler = (event) => {
    event.preventDefault();
    mealsCtx.addItem({
      id: `${Date.now()}`,
      name: nameInputRef.current.value,
      description: descriptionInputRef.current.value,
      price: +priceInputRef.current.value,
    });

    nameInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    priceInputRef.current.value = "";
    setIsSubmitDone(true);

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setIsSubmitDone(false);
    }, 2000);
  };

  return (
    <>
      <div className={classes["add-meal-button-wrapper"]}>
        <AddMealButton
          className={classes["add-meal-btn"]}
          onClick={() => setIsFormShown(true)}
        >
          Add a menu meal
        </AddMealButton>
      </div>
      {isFormShown && (
        <Modal onClick={() => setIsFormShown(false)}>
          <div className={classes["add-meal-form-wrapper"]}>
            <div className={classes["title-wrapper"]}>
              <h3 className={classes.title}>Add a new Meal</h3>
              <img
                className={`${classes["done-image"]} ${
                  isSubmitDone ? classes["done-image-show"] : ""
                }`}
                src={doneImage}
                alt="done"
              />
            </div>

            <form
              onSubmit={addItemHandler}
              className={classes["inputs-wrapper"]}
            >
              <Input
                className={classes["input-wrapper"]}
                input={{ type: "text", id: "Name", required: true }}
                label={"Name"}
                ref={nameInputRef}
              />
              <Input
                className={classes["input-wrapper"]}
                input={{ type: "text", id: "Description", required: true }}
                label={"Description"}
                ref={descriptionInputRef}
              />
              <Input
                className={`${classes["input-wrapper"]} ${classes.price}`}
                input={{
                  type: "number",
                  id: "Price",
                  step: "any",
                  required: true,
                }}
                label={`Price "euro"`}
                ref={priceInputRef}
              />
              <div className={classes["add-meal-btn-wrap"]}>
                <AddMealButton
                  onClick={() => setIsFormShown(false)}
                  className={`${classes.button} ${classes.close}`}
                >
                  Close
                </AddMealButton>
                <AddMealButton type={"submit"} className={classes.button}>
                  Add Meal
                </AddMealButton>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddMeal;
