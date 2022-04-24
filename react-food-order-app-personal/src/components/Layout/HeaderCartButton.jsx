import { React, useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnAnimation, setBtnAnimation] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
