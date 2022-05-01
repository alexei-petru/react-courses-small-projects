import { useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const timer = useRef({});

  const [isInputValid, setIsInputValid] = useState(true);

  const cartCtx = useContext(CartContext);

  const editChangeHandler = (event) => {
    const amountInputVal = +event.target.value;
    if (amountInputVal > 100 || amountInputVal < 1) {
      setIsInputValid(false);

      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setIsInputValid(true);
      }, 2000);
      return;
    } else {
      setIsInputValid(true);
      cartCtx.addEditedAmount({
        id: props.id,
        amount: amountInputVal,
      });
    }
  };

  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`${price} €`}</span>
          <Input
            onChange={(event) => editChangeHandler(event)}
            className={classes.amount}
            label={"x"}
            input={{
              id: props.name,
              value: isInputValid ? props.amount : "",
              type: "number",
              min: "1",
              max: "100",
            }}
          />
        </div>
      </div>
      {isInputValid || <p>Nope, amount need to be between 1 and 100</p>}
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        {/* <button onClick={props.onAdd}>+</button> */}
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
