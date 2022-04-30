import React, { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import EditIcon from "./EditIcon";
import MealItemEdit from "./MealItemEdit";

const MealItemInfo = (props) => {
  return (
    <div className={classes["meal-info"]}>
      <h3>{props.menuItem.name}</h3>
      <div className={classes.description}>{props.menuItem.description}</div>
      <div className={classes.price}>{`${props.price} €`}</div>
    </div>
  );
};

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = props.price.toFixed(2);
  const [isEditInfo, setIsEditInfo] = useState(false);

  const addToCardHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const editInfoHandler = () => {
    isEditInfo ? setIsEditInfo(false) : setIsEditInfo(true);
  };

  return (
    <li className={classes.meal}>
      <div className={classes["edit-icon-wrapper"]}>
        <button
          onClick={editInfoHandler}
          className={classes["btn-edit"]}
          disabled={isEditInfo && true}
        >
          <EditIcon />
        </button>
      </div>
      <div className={classes["meal-info-and-edit-wrapper"]}>
        {isEditInfo ? (
          <MealItemEdit closeEdit={editInfoHandler} menuItem={props} />
        ) : (
          <MealItemInfo menuItem={props} price={price} />
        )}
      </div>
      <div>
        {isEditInfo || (
          <MealItemForm id={props.id} onAddToCart={addToCardHandler} />
        )}
      </div>
    </li>
  );
};

export default MealItem;
